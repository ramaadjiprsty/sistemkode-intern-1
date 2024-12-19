import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavProps {
  title: string;
  active: boolean;
  onPress: () => void;
  style?: object;
  activeStyle?: object;
  textStyle?: object;
  otherStyle?: object;
}

const NavigationBar: React.FC<NavProps> = ({
  title,
  active,
  onPress,
  style,
  activeStyle,
  textStyle,
  otherStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tab, active && styles.activeTab, style, active && activeStyle, otherStyle]}
      onPress={onPress}
      activeOpacity={1}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 40,
    width: 200,
    backgroundColor: '#1E88E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#1B7ACD',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});

export default NavigationBar;