import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';

const LoadingStatesSection = ({ onPress, isLoading, handleLoadingTest }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>⏳ Loading & States</Text>
      
      <AnimatedButton
        title="Test Loading (3s)"
        onPress={handleLoadingTest}
        loading={isLoading}
        loadingText="Loading..."
        backgroundColor="#007AFF"
        shadowColor="#0056CC"
      />

      <AnimatedButton
        title="Disabled Button"
        onPress={() => {}}
        disabled={true}
        backgroundColor="#FF9500"
        shadowColor="#E6850E"
      />
    </View>
  );
};

export default LoadingStatesSection;
