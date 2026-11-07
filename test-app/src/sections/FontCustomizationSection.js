import React from 'react';
import { View, Text, Platform } from 'react-native';
import { AnimatedButton } from 'react-native-3d-animated-buttons';
import { globalStyles } from '../constants/styles';
import { heartV1, starV1 } from '../constants/icons';

const FontCustomizationSection = ({ onPress }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionTitle}>🔤 Font Customization</Text>
      
      <AnimatedButton
        title="Default Font"
        onPress={() => onPress('Default Font')}
        backgroundColor="#6366F1"
        shadowColor="#4F46E5"
      />

      <AnimatedButton
        title="Custom Font Weight"
        onPress={() => onPress('Bold Font')}
        backgroundColor="#8B5CF6"
        shadowColor="#7C3AED"
        textStyle={{
          fontWeight: '700',
          letterSpacing: 0.5,
        }}
      />

      <AnimatedButton
        title="Custom Font Size"
        onPress={() => onPress('Large Font')}
        backgroundColor="#EC4899"
        shadowColor="#DB2777"
        textStyle={{
          fontSize: 20,
          fontWeight: '600',
        }}
      />

      <AnimatedButton
        title="System Font"
        onPress={() => onPress('System Font')}
        backgroundColor="#10B981"
        shadowColor="#059669"
        textStyle={{
          fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
          fontSize: 16,
          fontWeight: '500',
        }}
      />

      <AnimatedButton
        title="Monospace Font"
        onPress={() => onPress('Monospace Font')}
        backgroundColor="#F59E0B"
        shadowColor="#D97706"
        textStyle={{
          fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
          fontSize: 16,
          letterSpacing: 1,
        }}
      />

      <AnimatedButton
        title="Custom Project Font"
        onPress={() => onPress('Project Font')}
        backgroundColor="#EF4444"
        shadowColor="#DC2626"
        customIconSvg={heartV1}
        iconSize={18}
        textStyle={{
          fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
          fontSize: 18,
          fontWeight: '600',
          letterSpacing: 0.3,
        }}
      />

      <View style={globalStyles.buttonRow}>
        <AnimatedButton
          title="Side Button 1"
          onPress={() => onPress('Side Button 1')}
          backgroundColor="#6B7280"
          shadowColor="#4B5563"
          customIconSvg={starV1}
          iconSize={14}
          style={globalStyles.halfButton}
          textStyle={{
            fontSize: 18,
            fontWeight: '500',
          }}
        />

        <AnimatedButton
          title="Side Button 2"
          onPress={() => onPress('Side Button 2')}
          backgroundColor="#6B7280"
          shadowColor="#4B5563"
          customIconSvg={starV1}
          iconSize={20}
          style={globalStyles.halfButton}
          textStyle={{
            fontSize: 18,
            fontWeight: '700',
          }}
        />
      </View>
    </View>
  );
};

export default FontCustomizationSection;
