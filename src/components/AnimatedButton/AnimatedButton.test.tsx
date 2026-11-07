import React from 'react';
import { Image } from 'react-native';
import { act, create, type ReactTestInstance } from 'react-test-renderer';

import type { AnimatedButtonProps } from '@/interfaces';

import AnimatedButton from './AnimatedButton';

const mockImpact = jest.fn((_style: string) => Promise.resolve());
jest.mock('expo-haptics', () => ({
  impactAsync: (style: string) => mockImpact(style),
  ImpactFeedbackStyle: { Light: 'light', Medium: 'medium', Heavy: 'heavy' },
}));

function render(props: Partial<AnimatedButtonProps> = {}) {
  let tree!: ReturnType<typeof create>;
  act(() => {
    tree = create(<AnimatedButton title="Continue" onPress={() => {}} {...props} />);
  });
  const pressable = (): ReactTestInstance =>
    tree.root.findAll(
      (node) => node.props.accessibilityRole === 'button' && typeof node.props.onPressIn === 'function',
    )[0]!;
  return { tree, pressable };
}

beforeEach(() => {
  jest.useFakeTimers();
  mockImpact.mockClear();
});
afterEach(() => jest.useRealTimers());

describe('haptics prop', () => {
  it('fires haptic feedback on press by default', () => {
    const { pressable } = render({ hapticStyle: 'Light' });
    act(() => pressable().props.onPressIn());
    expect(mockImpact).toHaveBeenCalledWith('light');
  });

  it('stays silent when haptics={false}', () => {
    const { pressable } = render({ haptics: false });
    act(() => pressable().props.onPressIn());
    expect(mockImpact).not.toHaveBeenCalled();
  });

  it('stays silent when disabled or loading', () => {
    const disabled = render({ disabled: true });
    act(() => disabled.pressable().props.onPressIn());
    const loading = render({ loading: true });
    act(() => loading.pressable().props.onPressIn());
    expect(mockImpact).not.toHaveBeenCalled();
  });
});

describe('iconSource prop', () => {
  it('renders a png icon at iconSize', () => {
    const source = { uri: 'https://example.com/icon.png' };
    const { tree } = render({ iconSource: source, iconSize: 20 });
    const image = tree.root.findByType(Image);
    expect(image.props.source).toEqual(source);
    expect(image.props.style).toEqual({ width: 20, height: 20 });
  });

  it('renders no image when iconSource is not set', () => {
    const { tree } = render();
    expect(tree.root.findAllByType(Image)).toHaveLength(0);
  });
});

describe('onPress', () => {
  it('ignores a second tap inside the 250ms lock, then allows another', () => {
    const onPress = jest.fn();
    const { pressable } = render({ onPress });

    act(() => pressable().props.onPress());
    act(() => pressable().props.onPress());
    expect(onPress).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(250);
    });
    act(() => pressable().props.onPress());
    expect(onPress).toHaveBeenCalledTimes(2);
  });

  it('does not fire when disabled', () => {
    const onPress = jest.fn();
    const { pressable } = render({ onPress, disabled: true });
    act(() => pressable().props.onPress());
    expect(onPress).not.toHaveBeenCalled();
  });
});
