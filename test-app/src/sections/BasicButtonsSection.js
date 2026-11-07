import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';

const BasicButtonsSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>Basic Buttons</Text>
      
      <AnimatedButton
        title="Primary Button"
        onPress={() => onPress('Primary Button')}
      />

      <AnimatedButton
        title="Secondary Button"
        onPress={() => onPress('Secondary Button')}
        backgroundColor="#6C757D"
        shadowColor="#5A6268"
      />

      <AnimatedButton
        title="Success Button"
        onPress={() => onPress('Success Button')}
        backgroundColor="#28A745"
        shadowColor="#1E7E34"
      />
    </View>
  );
};

export default BasicButtonsSection;
