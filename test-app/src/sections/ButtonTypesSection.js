import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';

const ButtonTypesSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>🎪 Button Types</Text>
      
      <AnimatedButton
        title="Normal Button"
        onPress={() => onPress('Normal Button')}
        type="normal"
        backgroundColor="#FF6B35"
        shadowColor="#E55529"
      />

      <AnimatedButton
        title="Capsule Button"
        onPress={() => onPress('Capsule Button')}
        type="capsule"
        backgroundColor="#9C27B0"
        shadowColor="#7B1FA2"
      />
    </View>
  );
};

export default ButtonTypesSection;
