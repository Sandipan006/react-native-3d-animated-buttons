import type { HapticStyle } from '@/types';

type HapticsModule = typeof import('expo-haptics');

let cached: HapticsModule | null | undefined;

/**
 * expo-haptics is an optional peer. Metro treats a `require` inside try/catch as optional,
 * so apps without the package still bundle and the button simply stays silent.
 */
function loadHaptics(): HapticsModule | null {
  if (cached === undefined) {
    try {
      cached = require('expo-haptics') as HapticsModule;
    } catch {
      cached = null;
    }
  }
  return cached;
}

export async function triggerHaptic(style: HapticStyle): Promise<void> {
  const haptics = loadHaptics();
  if (!haptics) return;
  try {
    await haptics.impactAsync(haptics.ImpactFeedbackStyle[style]);
  } catch {
    // Device without a haptic engine: nothing to do.
  }
}
