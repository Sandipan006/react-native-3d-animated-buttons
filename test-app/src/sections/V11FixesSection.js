import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';

const pngIcon = require('../../assets/icon.png');

const V11FixesSection = ({ onPress }) => {
  const [taps, setTaps] = useState(0);

  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>✅ v1.1 fixes</Text>

      <AnimatedButton title="Haptics on (default)" onPress={() => onPress('Haptics on')} />

      <AnimatedButton
        title="Haptics off (#4)"
        onPress={() => onPress('Haptics off')}
        haptics={false}
        backgroundColor="#6C5CE7"
        shadowColor="#4B3FB5"
      />

      <AnimatedButton
        title="PNG icon, left (#3)"
        onPress={() => onPress('PNG left')}
        iconSource={pngIcon}
        backgroundColor="#E17055"
        shadowColor="#B8523A"
      />

      <AnimatedButton
        title="PNG icon, right"
        onPress={() => onPress('PNG right')}
        iconSource={pngIcon}
        iconPosition="right"
        iconSize={28}
        backgroundColor="#00B894"
        shadowColor="#008C70"
      />

      <AnimatedButton
        title={`Double-tap lock: ${taps}`}
        onPress={() => setTaps((count) => count + 1)}
        haptics={false}
        backgroundColor="#0984E3"
        shadowColor="#0768B5"
      />
    </View>
  );
};

export default V11FixesSection;
