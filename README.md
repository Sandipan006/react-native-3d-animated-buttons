# React Native Animated Button

A beautiful React Native animated button component with Duolingo-style 3D press animation and haptic feedback. Written in TypeScript with full type definitions.

## 📱 **Demo**

<!-- Add your demo video/GIF here -->
<div align="center">
  
### 🎬 **Live Demo Video**
![Demo Video](./docs/assets/videos/demo-video.gif)

### 📱 **Screenshots**
<img src="./docs/assets/images/demo-screenshot.png" width="300" alt="AnimatedButton Demo" />

</div>

> **👆 Scan QR code with Expo Go to test on your device!**

## Features

- ✨ **Duolingo-style 3D press animation** - Smooth button press effect with shadow
- 📳 **Haptic feedback** - Tactile response on button press
- 🎨 **Customizable design** - Colors, fonts, and styles
- 🔄 **Loading states** - Built-in loading indicator with optional text
- 🎯 **Icon support** - Built-in icons + comprehensive SVG icon library
- ↔️ **Icon positioning** - Left or right icon placement for better UX
- 📱 **Responsive design** - Adapts to different screen sizes
- 🎪 **Button types** - Normal and capsule shapes
- ♿ **Accessibility** - Proper disabled states and opacity
- 📘 **TypeScript** - Full type definitions included
- 🎨 **50+ SVG Icons** - Social, payment, arrows, actions, common UI icons

## Installation

Install the package along with its required dependencies:

```bash
npm install react-native-animated-button react-native-svg expo-haptics
```

That's it! Everything you need in one command.

## Usage

### Basic Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import AnimatedButton from 'react-native-animated-button';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <AnimatedButton
        title="Press Me"
        onPress={() => console.log('Button pressed!')}
      />
    </View>
  );
};

export default App;
```

### Advanced Usage

```tsx
import AnimatedButton from 'react-native-animated-button';

<AnimatedButton
  title="Sign in with Apple"
  onPress={() => handleAppleSignIn()}
  backgroundColor="#000000"
  shadowColor="#333333"
  textColor="#FFFFFF"
  hapticStyle="Medium"
  icon="apple"
  type="capsule"
  loading={isLoading}
  loadingText="Signing in..."
  disabled={false}
  style={{ marginBottom: 20 }}
  textStyle={{ fontSize: 16, fontWeight: 'bold' }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | **Required** | Button text |
| `onPress` | function | **Required** | Press handler function |
| `backgroundColor` | string | `'#20B2AA'` | Main button background color |
| `shadowColor` | string | `'#1A9B94'` | Shadow layer background color |
| `textColor` | string | `'#FFFFFF'` | Button text color |
| `style` | object | `{}` | Additional styles for button container |
| `textStyle` | object | `{}` | Additional styles for button text |
| `disabled` | boolean | `false` | Whether button is disabled |
| `hapticStyle` | string | `'Heavy'` | Haptic feedback style: `'Light'`, `'Medium'`, `'Heavy'` |
| `icon` | string | `null` | Built-in icon type: `'apple'`, `'google'`, `'phone'`, `'facebook'`, or `null` |
| `customIcon` | React.ComponentType | `null` | Custom SVG icon component (highest priority) |
| `customIconSvg` | string | `null` | Custom SVG icon as string markup |
| `iconSize` | number | `24` | Icon size (width and height in pixels) |
| `iconPosition` | string | `'left'` | Icon position: `'left'` or `'right'` |
| `loading` | boolean | `false` | Whether to show loading indicator |
| `loadingText` | string | `null` | Text to show when loading (optional) |
| `type` | string | `'normal'` | Button type: `'normal'` or `'capsule'` |

## Examples

<div align="center">
<img src="./docs/assets/images/button-types.png" width="400" alt="Button Types" />
</div>

### Different Button Types

```tsx
// Normal button
<AnimatedButton
  title="Normal Button"
  onPress={() => {}}
  type="normal"
/>

// Capsule button
<AnimatedButton
  title="Capsule Button"
  onPress={() => {}}
  type="capsule"
/>
```

### With Built-in Icons

<div align="center">
<img src="./docs/assets/images/social-icons.png" width="400" alt="Social Media Icons" />
</div>

```tsx
// Apple Sign In
<AnimatedButton
  title="Sign in with Apple"
  onPress={() => {}}
  icon="apple"
  backgroundColor="#000000"
  shadowColor="#333333"
/>

// Google Sign In
<AnimatedButton
  title="Sign in with Google"
  onPress={() => {}}
  icon="google"
  backgroundColor="#FFFFFF"
  shadowColor="#E0E0E0"
  textColor="#1A1A1A"
/>

// Facebook Sign In
<AnimatedButton
  title="Continue with Facebook"
  onPress={() => {}}
  icon="facebook"
  backgroundColor="#1877F2"
  shadowColor="#1464C7"
/>

// Phone Sign In
<AnimatedButton
  title="Sign in with Phone"
  onPress={() => {}}
  icon="phone"
  backgroundColor="#34C759"
  shadowColor="#2AA946"
/>
```

### With Custom Icons

```tsx
// Method 1: Custom React Component (Recommended)
import MyCustomIcon from './icons/MyCustomIcon';

<AnimatedButton
  title="Custom Icon Button"
  onPress={() => {}}
  customIcon={MyCustomIcon}
  iconSize={24}
  backgroundColor="#FF6B9D"
  shadowColor="#E55A87"
/>

// Method 2: SVG String
<AnimatedButton
  title="SVG String Icon"
  onPress={() => {}}
  customIconSvg={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
  </svg>`}
  iconSize={20}
  backgroundColor="#FFD700"
  shadowColor="#E6C200"
/>

// Method 3: Icon Priority (customIcon > customIconSvg > icon)
<AnimatedButton
  title="Priority Example"
  onPress={() => {}}
  icon="apple"           // Ignored (lowest priority)
  customIcon={HeartIcon} // Used (highest priority)
/>

// Method 4: Icon Positioning for Better UX
<AnimatedButton
  title="Previous"
  onPress={() => {}}
  customIconSvg={arrowLeftSvg}
  iconPosition="left"    // Arrow on left (default)
/>

<AnimatedButton
  title="Continue"
  onPress={() => {}}
  customIconSvg={arrowRightSvg}
  iconPosition="right"   // Arrow on right (better UX!)
/>
```

### Loading States

```tsx
<AnimatedButton
  title="Submit"
  onPress={() => {}}
  loading={isSubmitting}
  loadingText="Submitting..."
  disabled={isSubmitting}
/>
```

### Custom Colors and Styles

```tsx
<AnimatedButton
  title="Custom Button"
  onPress={() => {}}
  backgroundColor="#FF6B6B"
  shadowColor="#E55555"
  textColor="#FFFFFF"
  style={{ 
    marginHorizontal: 20,
    marginBottom: 10 
  }}
  textStyle={{ 
    fontSize: 18,
    fontWeight: '600' 
  }}
/>
```

### Font Customization

```tsx
<AnimatedButton
  title="Custom Font Button"
  onPress={() => {}}
  backgroundColor="#FF6B35"
  shadowColor="#E55529"
  textStyle={{
    fontFamily: Platform.OS === 'ios' ? 'YourCustomFont-Bold' : 'your_custom_font_bold',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  }}
/>

<AnimatedButton
  title="System Font"
  onPress={() => {}}
  textStyle={{
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontSize: 16,
    fontWeight: '500',
  }}
/>
```

### Using the Icon Library

```tsx
// Import icons from the comprehensive library
import AnimatedButton, { icons } from 'react-native-animated-button';

// Social media icons
<AnimatedButton
  title="Sign in with Apple"
  onPress={() => {}}
  customIconSvg={icons.appleV1}
  iconSize={20}
  backgroundColor="#000000"
/>

// Payment icons
<AnimatedButton
  title="Add to Cart"
  onPress={() => {}}
  customIconSvg={icons.cartV1}
  iconSize={18}
  backgroundColor="#FF6B35"
/>

// Arrow icons with positioning
<AnimatedButton
  title="Continue"
  onPress={() => {}}
  customIconSvg={icons.arrowRightV1}
  iconPosition="right"
  backgroundColor="#34C759"
/>

// Common UI icons
<AnimatedButton
  title="Like Post"
  onPress={() => {}}
  customIconSvg={icons.heartV1}
  iconSize={16}
  backgroundColor="#FF6B9D"
/>
```

## Haptic Feedback

The component uses Expo Haptics for tactile feedback. You can customize the intensity:

- `'Light'` - Subtle feedback
- `'Medium'` - Moderate feedback  
- `'Heavy'` - Strong feedback (default)

```tsx
<AnimatedButton
  title="Light Haptic"
  onPress={() => {}}
  hapticStyle="Light"
/>
```

## TypeScript Support

This package is written in TypeScript and includes full type definitions. You'll get excellent IntelliSense support and type safety:

```tsx
import AnimatedButton, { AnimatedButtonProps, IconType, HapticStyle } from 'react-native-animated-button';

// All props are fully typed
const MyButton: React.FC = () => {
  const handlePress = (): void => {
    console.log('Button pressed!');
  };

  return (
    <AnimatedButton
      title="Typed Button"
      onPress={handlePress}
      hapticStyle="Medium" // Autocomplete available: 'Light' | 'Medium' | 'Heavy'
      icon="apple" // Autocomplete available: 'apple' | 'google' | 'phone' | 'facebook'
      type="capsule" // Autocomplete available: 'normal' | 'capsule'
    />
  );
};
```

## Test App

This package includes a comprehensive test app demonstrating all features:

```bash
cd test-app
npm install
npx expo start
```

The test app showcases:
- ✅ **All button features** - Basic, social, icons, types, loading
- ✅ **Icon positioning** - Left/right placement examples
- ✅ **Font customization** - Typography styling options
- ✅ **Side-by-side layouts** - Responsive button pairing
- ✅ **Professional architecture** - Clean, modular code structure

Perfect for understanding how to integrate the component in your project!

## Responsive Design

The component automatically adapts to different screen sizes using a responsive scaling system based on device dimensions.

## License

MIT

## Contributing

Pull requests are welcome! Please make sure to update tests as appropriate.

## Support

If you like this component, please give it a ⭐ on GitHub!
