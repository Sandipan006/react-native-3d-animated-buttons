# Changelog

## 1.1.0 - 2026-11-08

### Added
- `haptics` prop. Pass `haptics={false}` to turn haptic feedback off (#4).
- `iconSource` prop. Use a PNG or JPG as the button icon, for example `iconSource={require('./icon.png')}` (#3).
- Jest tests for haptics, icon selection and the press lock.

### Changed
- Source split into `components/`, `adapters/`, `hooks/`, `interfaces/`, `types/`, `constants/` and `utils/`, with the `@/` import alias. The public API is the same.
- The build runs `tsc-alias` so `lib/` has relative imports only.
- Dev dependencies: `react-native-svg` 15.16.1, `typescript` 5.9.3, `@types/react` 18.3.31. Removed the unused `@types/react-native`.

### Fixed
- Apps without `expo-haptics` no longer crash on import. It is now truly optional.
- `react-native-svg` is now optional. It is only needed for SVG icons.
- The press-lock timer is cleared on unmount.
