import { useCallback } from 'react';
import { PixelRatio, useWindowDimensions } from 'react-native';

import { BASE_SCREEN_WIDTH } from '@/constants';

/** Scales a size to the screen and reacts to rotation. Rounds to whole pixels to avoid blur. */
export function useNormalize() {
  const { width, height } = useWindowDimensions();
  const scale = Math.min(width, height) / BASE_SCREEN_WIDTH;

  return useCallback((size: number) => Math.round(PixelRatio.roundToNearestPixel(scale * size)), [scale]);
}
