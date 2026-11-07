import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export const DEFAULT_BACKGROUND = '#20B2AA';
export const DEFAULT_SHADOW = '#1A9B94';
export const DEFAULT_TEXT = '#FFFFFF';

export const FONT_FAMILY = IS_IOS ? 'Figtree-SemiBold' : 'figtree_semibold';

/** Logical width of an iPhone X: the base every size is scaled from. */
export const BASE_SCREEN_WIDTH = 375;

export const PRESS_DEPTH = 6;
export const PRESS_LOCK_MS = 250;
export const PRESS_SPRING = { stiffness: 300, damping: 20, mass: 0.4, useNativeDriver: true } as const;

export const ICON_GAP = 7;
export const DISABLED_OPACITY = 0.6;
