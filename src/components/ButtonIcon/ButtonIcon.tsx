import React from 'react';
import { Image } from 'react-native';

import { resolveIcon, type IconInput } from '@/utils';

type SvgModule = typeof import('react-native-svg');

let svgModule: SvgModule | null | undefined;

/** react-native-svg is an optional peer: only SVG icons need it. */
function loadSvg(): SvgModule | null {
  if (svgModule === undefined) {
    try {
      svgModule = require('react-native-svg') as SvgModule;
    } catch {
      svgModule = null;
      if (__DEV__) {
        console.warn(
          '[react-native-3d-animated-buttons] react-native-svg is not installed, so SVG icons are not shown.',
        );
      }
    }
  }
  return svgModule;
}

interface ButtonIconProps extends IconInput {
  size: number;
}

export function ButtonIcon({ size, ...input }: ButtonIconProps) {
  const resolved = resolveIcon(input);
  if (!resolved) return null;

  switch (resolved.kind) {
    case 'component':
      return <resolved.Component width={size} height={size} />;
    case 'image':
      return (
        <Image
          source={resolved.source}
          style={{ width: size, height: size }}
          resizeMode="contain"
          accessible={false}
        />
      );
    case 'svg': {
      const svg = loadSvg();
      return svg ? <svg.SvgXml xml={resolved.xml} width={size} height={size} /> : null;
    }
  }
}
