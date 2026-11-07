import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';
import { appleV1, googleV1, facebookV1 } from '../constants/icons';

const SocialIconsSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>🎭 Social Icons</Text>
      
      <AnimatedButton
        title="Sign in with Apple"
        onPress={() => onPress('Apple Sign In')}
        backgroundColor="#000000"
        shadowColor="#333333"
        customIconSvg={appleV1}
        iconSize={20}
      />

      <AnimatedButton
        title="Sign in with Google"
        onPress={() => onPress('Google Sign In')}
        backgroundColor="#FFFFFF"
        shadowColor="#E0E0E0"
        textColor="#1A1A1A"
        customIconSvg={googleV1}
        iconSize={20}
      />

      <AnimatedButton
        title="Continue with Facebook"
        onPress={() => onPress('Facebook Sign In')}
        backgroundColor="#1877F2"
        shadowColor="#1464C7"
        customIconSvg={facebookV1}
        iconSize={18}
      />
    </View>
  );
};

export default SocialIconsSection;
