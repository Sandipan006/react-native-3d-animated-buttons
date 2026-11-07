import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';
import { arrowLeftV1, arrowRightV1 } from '../constants/icons';

const IconPositionSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>↔️ Icon Position</Text>
      
      <AnimatedButton
        title="Previous"
        onPress={() => onPress('Previous')}
        backgroundColor="#6B7280"
        shadowColor="#4B5563"
        customIconSvg={arrowLeftV1}
        iconSize={18}
        iconPosition="left"
      />

      <AnimatedButton
        title="Continue"
        onPress={() => onPress('Continue')}
        backgroundColor="#34C759"
        shadowColor="#2AA946"
        customIconSvg={arrowRightV1}
        iconSize={18}
        iconPosition="right"
      />

      <View style={globalStyles.buttonRow}>
        <AnimatedButton
          title="Back"
          onPress={() => onPress('Back')}
          backgroundColor="#EF4444"
          shadowColor="#DC2626"
          customIconSvg={arrowLeftV1}
          iconSize={16}
          iconPosition="left"
          style={globalStyles.halfButton}
          type="capsule"
        />

        <AnimatedButton
          title="Next"
          onPress={() => onPress('Next')}
          backgroundColor="#10B981"
          shadowColor="#059669"
          customIconSvg={arrowRightV1}
          iconSize={16}
          iconPosition="right"
          style={globalStyles.halfButton}
          type="capsule"
        />
      </View>
    </View>
  );
};

export default IconPositionSection;
