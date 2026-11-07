import React, { useState } from 'react';
import { Text, View, Alert, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from './src/constants/styles';

// Import demo sections
import BasicButtonsSection from './src/sections/BasicButtonsSection';
import SocialIconsSection from './src/sections/SocialIconsSection';
import IconDemoSection from './src/sections/IconDemoSection';
import ButtonTypesSection from './src/sections/ButtonTypesSection';
import LoadingStatesSection from './src/sections/LoadingStatesSection';
import SideBySideSection from './src/sections/SideBySideSection';
import IconPositionSection from './src/sections/IconPositionSection';
import FontCustomizationSection from './src/sections/FontCustomizationSection';
import V11FixesSection from './src/sections/V11FixesSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = (buttonName) => {
    Alert.alert('Button Pressed!', `You pressed: ${buttonName}`);
  };

  const handleLoadingTest = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar style="auto" />
      
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        {/* Header */}
        <View style={globalStyles.header}>
          <Text style={globalStyles.title}>🎨 3D Animated Button Demo</Text>
          <Text style={globalStyles.subtitle}>Professional React Native 3D button component</Text>
        </View>

        {/* Demo Sections */}
        <V11FixesSection onPress={handlePress} />
        <BasicButtonsSection onPress={handlePress} />
        <SocialIconsSection onPress={handlePress} />
        <IconDemoSection onPress={handlePress} />
        <ButtonTypesSection onPress={handlePress} />
        <LoadingStatesSection 
          onPress={handlePress} 
          isLoading={isLoading} 
          handleLoadingTest={handleLoadingTest} 
        />
        <SideBySideSection onPress={handlePress} />
        <IconPositionSection onPress={handlePress} />
        <FontCustomizationSection onPress={handlePress} />

        {/* Footer */}
        <View style={globalStyles.footer}>
          <Text style={globalStyles.footerText}>
            ✨ React Native 3D Animated Buttons{'\n'}
            Professional 3D button component with haptic feedback
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}