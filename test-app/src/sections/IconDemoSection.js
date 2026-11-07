import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';
import { heartV1, starV1, cartV1 } from '../constants/icons';

const IconDemoSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>🎨 Icon Demo</Text>
      
      <AnimatedButton
        title="Like Post"
        onPress={() => onPress('Heart')}
        backgroundColor="#FF6B9D"
        shadowColor="#E55A87"
        customIconSvg={heartV1}
        iconSize={18}
      />

      <AnimatedButton
        title="Rate 5 Stars"
        onPress={() => onPress('Star')}
        backgroundColor="#FFD700"
        shadowColor="#E6C200"
        textColor="#1A1A1A"
        customIconSvg={starV1}
        iconSize={18}
      />

      <AnimatedButton
        title="Shopping Cart"
        onPress={() => onPress('Cart')}
        backgroundColor="#F59E0B"
        shadowColor="#D97706"
        customIconSvg={cartV1}
        iconSize={18}
      />
    </View>
  );
};

export default IconDemoSection;
