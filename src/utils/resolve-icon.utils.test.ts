import { resolveIcon } from './resolve-icon.utils';

const Custom = () => null;
const png = { uri: 'https://example.com/icon.png' };

describe('resolveIcon', () => {
  it('returns null when no icon is given', () => {
    expect(resolveIcon({})).toBeNull();
  });

  it('resolves a built-in icon to svg xml', () => {
    const result = resolveIcon({ icon: 'google' });
    expect(result?.kind).toBe('svg');
  });

  it('resolves a png source to an image', () => {
    expect(resolveIcon({ iconSource: png })).toEqual({ kind: 'image', source: png });
  });

  it('resolves custom svg xml', () => {
    expect(resolveIcon({ customIconSvg: '<svg/>' })).toEqual({ kind: 'svg', xml: '<svg/>' });
  });

  it('prefers customIcon > iconSource > customIconSvg > icon', () => {
    const all = { icon: 'apple', customIconSvg: '<svg/>', iconSource: png, customIcon: Custom } as const;
    expect(resolveIcon(all)?.kind).toBe('component');
    expect(resolveIcon({ ...all, customIcon: null })?.kind).toBe('image');
    expect(resolveIcon({ ...all, customIcon: null, iconSource: null })).toEqual({
      kind: 'svg',
      xml: '<svg/>',
    });
  });
});
