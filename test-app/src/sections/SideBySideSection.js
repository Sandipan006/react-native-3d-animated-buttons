import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';
import { heartV1, starV1, phoneV1, emailV1 } from '../constants/icons';

const SideBySideSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>👥 Side by Side Buttons</Text>
      
      <View style={globalStyles.buttonRow}>
        <AnimatedButton
          title="Like"
          onPress={() => onPress('Like')}
          backgroundColor="#FF6B9D"
          shadowColor="#E55A87"
          customIconSvg={heartV1}
          iconSize={18}
          style={globalStyles.halfButton}
        />

        <AnimatedButton
          title="Star"
          onPress={() => onPress('Star')}
          backgroundColor="#FFD700"
          shadowColor="#E6C200"
          textColor="#1A1A1A"
          customIconSvg={starV1}
          iconSize={18}
          style={globalStyles.halfButton}
        />
      </View>

      <View style={globalStyles.buttonRow}>
        <AnimatedButton
          title="Call"
          onPress={() => onPress('Call')}
          backgroundColor="#34C759"
          shadowColor="#2AA946"
          customIconSvg={phoneV1}
          type="capsule"
          iconSize={16}
          style={globalStyles.halfButton}
        />

        <AnimatedButton
          title="Email"
          onPress={() => onPress('Email')}
          backgroundColor="#007AFF"
          shadowColor="#0056CC"
          customIconSvg={emailV1}
          type="capsule"
          iconSize={16}
          style={globalStyles.halfButton}
        />
      </View>
    </View>
  );
};

export default SideBySideSection;
