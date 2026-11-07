import type { ComponentType } from 'react';

export type HapticStyle = 'Light' | 'Medium' | 'Heavy';
export type IconType = 'apple' | 'google' | 'phone' | 'facebook';
export type ButtonType = 'normal' | 'capsule';
export type IconPosition = 'left' | 'right';
export type IconComponent = ComponentType<{ width?: number; height?: number; color?: string }>;
