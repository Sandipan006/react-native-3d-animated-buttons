import type { ImageSourcePropType } from 'react-native';

import { phoneV1 } from '@/icons/actions/ActionIcons';
import { appleV1, facebookV1, googleV1 } from '@/icons/social/SocialIcons';
import type { IconComponent, IconType } from '@/types';

export interface IconInput {
  icon?: IconType | null;
  customIcon?: IconComponent | null;
  customIconSvg?: string | null;
  iconSource?: ImageSourcePropType | null;
}

export type ResolvedIcon =
  | { kind: 'component'; Component: IconComponent }
  | { kind: 'image'; source: ImageSourcePropType }
  | { kind: 'svg'; xml: string };

const BUILT_IN_ICONS: Record<IconType, string> = {
  apple: appleV1,
  google: googleV1,
  facebook: facebookV1,
  phone: phoneV1,
};

/** Precedence, most specific first: customIcon > iconSource > customIconSvg > icon. */
export function resolveIcon(input: IconInput): ResolvedIcon | null {
  if (input.customIcon) return { kind: 'component', Component: input.customIcon };
  if (input.iconSource) return { kind: 'image', source: input.iconSource };
  if (input.customIconSvg) return { kind: 'svg', xml: input.customIconSvg };
  if (input.icon) {
    const xml = BUILT_IN_ICONS[input.icon];
    if (xml) return { kind: 'svg', xml };
  }
  return null;
}
