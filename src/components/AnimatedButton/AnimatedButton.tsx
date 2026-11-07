import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  AccessibilityState,
  ActivityIndicator,
  Animated,
  I18nManager,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { triggerHaptic } from '@/adapters';
import { ButtonIcon } from '@/components/ButtonIcon';
import {
  DEFAULT_BACKGROUND,
  DEFAULT_SHADOW,
  DEFAULT_TEXT,
  DISABLED_OPACITY,
  FONT_FAMILY,
  ICON_GAP,
  IS_IOS,
  PRESS_DEPTH,
  PRESS_LOCK_MS,
  PRESS_SPRING,
} from '@/constants';
import { useNormalize } from '@/hooks';
import type { AnimatedButtonProps } from '@/interfaces';
import type { IconPosition } from '@/types';

const AnimatedButton = forwardRef<View, AnimatedButtonProps>((props, ref) => {
  const {
    title,
    onPress,
    backgroundColor = DEFAULT_BACKGROUND,
    shadowColor = DEFAULT_SHADOW,
    textColor = DEFAULT_TEXT,
    style,
    textStyle,
    disabled = false,
    haptics = true,
    hapticStyle = 'Heavy',
    icon = null,
    customIcon = null,
    customIconSvg = null,
    iconSource = null,
    iconSize = 24,
    iconPosition,
    loading = false,
    loadingText = null,
    type = 'normal',
    fullWidth = true,
    minHeight,
    testID,
    accessibilityLabel,
    accessibilityHint,
    onLongPress,
    hitSlop,
    disableAnimations,
  } = props;

  const normalize = useNormalize();
  const pressY = useRef(new Animated.Value(0)).current;
  const pressLock = useRef(false); // guard to prevent rapid double presses
  const unlockTimer = useRef<ReturnType<typeof setTimeout>>();

  const inactive = disabled || loading;
  const isCapsule = type === 'capsule';
  const mainRadius = normalize(isCapsule ? 50 : 18);
  const shadowRadius = normalize(isCapsule ? 50 : 19);
  // Auto-swap for RTL when the caller does not choose a side.
  const side: IconPosition = iconPosition ?? (I18nManager.isRTL ? 'right' : 'left');

  const springTo = useCallback(
    (toValue: number) => {
      if (disableAnimations) return;
      Animated.spring(pressY, { toValue, ...PRESS_SPRING }).start();
    },
    [pressY, disableAnimations],
  );

  const handlePressIn = useCallback(() => {
    if (inactive) return;
    if (haptics) triggerHaptic(hapticStyle);
    springTo(PRESS_DEPTH);
  }, [inactive, haptics, hapticStyle, springTo]);

  const handlePressOut = useCallback(() => {
    if (inactive) return;
    springTo(0);
  }, [inactive, springTo]);

  useEffect(
    () => () => {
      if (unlockTimer.current !== undefined) clearTimeout(unlockTimer.current);
    },
    [],
  );

  const handlePress = useCallback(() => {
    if (inactive || !onPress || pressLock.current) return;
    pressLock.current = true;
    try {
      onPress();
    } finally {
      unlockTimer.current = setTimeout(() => {
        pressLock.current = false;
      }, PRESS_LOCK_MS);
    }
  }, [inactive, onPress]);

  const a11yState: AccessibilityState = useMemo(
    () => ({ disabled: inactive, busy: loading }),
    [inactive, loading],
  );

  const spinnerColor = typeof textColor === 'string' ? textColor : DEFAULT_TEXT;

  const iconNode = (
    <ButtonIcon
      size={iconSize}
      icon={icon}
      customIcon={customIcon}
      customIconSvg={customIconSvg}
      iconSource={iconSource}
    />
  );
  const gap = <View style={{ width: normalize(ICON_GAP) }} />;

  return (
    <View
      ref={ref}
      testID={testID}
      style={[
        styles.container,
        fullWidth && styles.fullWidth,
        { marginBottom: normalize(12) },
        style,
        inactive && { opacity: DISABLED_OPACITY },
      ]}
    >
      <View
        pointerEvents="none"
        style={[
          styles.shadowLayer,
          IOS_CURVE,
          { top: normalize(PRESS_DEPTH), borderRadius: shadowRadius, backgroundColor: shadowColor },
        ]}
      />

      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={onLongPress}
        hitSlop={hitSlop}
        {...(Platform.OS === 'android' ? { android_ripple: { borderless: false } } : {})}
        disabled={inactive}
        accessibilityRole="button"
        accessibilityState={a11yState}
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityHint={accessibilityHint ?? (loading ? 'In progress' : undefined)}
        style={styles.pressable}
      >
        <Animated.View
          style={[
            styles.button,
            IOS_CURVE,
            {
              minHeight: minHeight ?? normalize(52),
              paddingVertical: normalize(14),
              paddingHorizontal: normalize(18),
              borderRadius: mainRadius,
              backgroundColor,
              transform: [{ translateY: pressY }],
            },
          ]}
        >
          <View style={styles.content}>
            {loading ? (
              <>
                <ActivityIndicator size="small" color={spinnerColor} />
                {loadingText ? (
                  <Text style={[styles.textBase, { color: textColor }, textStyle]}>{loadingText}</Text>
                ) : null}
              </>
            ) : (
              <>
                {side === 'left' && iconNode}
                {side === 'left' && gap}
                <Text
                  style={[
                    styles.textBase,
                    { color: textColor, fontSize: normalize(18), fontFamily: FONT_FAMILY },
                    textStyle,
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
                {side === 'right' && gap}
                {side === 'right' && iconNode}
              </>
            )}
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

const IOS_CURVE = IS_IOS ? ({ borderCurve: 'continuous' } as const) : null;

const styles = StyleSheet.create({
  container: { position: 'relative' },
  fullWidth: { width: '100%' },
  shadowLayer: { position: 'absolute', left: 0, right: 0, height: '100%' },
  pressable: { width: '100%', position: 'relative', zIndex: 3 },
  button: { width: '100%', alignItems: 'center', justifyContent: 'center' },
  // A spacer View is used instead of `gap` for older React Native versions.
  content: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  textBase: { includeFontPadding: false, textAlignVertical: 'center' },
});

export default React.memo(AnimatedButton);
