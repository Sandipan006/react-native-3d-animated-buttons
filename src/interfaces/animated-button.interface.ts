import type {
  ColorValue,
  ImageSourcePropType,
  Insets,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import type {
  ButtonType,
  HapticStyle,
  IconComponent,
  IconPosition,
  IconType,
} from '@/types';

export interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: ColorValue;
  shadowColor?: ColorValue;
  textColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  /** Set to false to turn off haptic feedback. Defaults to true. */
  haptics?: boolean;
  hapticStyle?: HapticStyle;
  icon?: IconType | null;
  customIcon?: IconComponent | null;
  customIconSvg?: string | null;
  /** A PNG/JPG icon, e.g. `require('./icon.png')` or `{ uri }`. */
  iconSource?: ImageSourcePropType | null;
  iconSize?: number;
  /** Respects RTL when omitted. */
  iconPosition?: IconPosition;
  loading?: boolean;
  loadingText?: string | null;
  type?: ButtonType;
  fullWidth?: boolean;
  minHeight?: number;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  onLongPress?: () => void;
  hitSlop?: Insets;
  /** Skips the press animation, for reduced-motion users. */
  disableAnimations?: boolean;
}
