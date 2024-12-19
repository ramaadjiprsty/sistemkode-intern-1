// SearchDropdown.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface Item {
  label: string;
  value: string;
}

interface Props {
  items: Item[];
  onValueChange: (value: string | null) => void;
}

const SearchDropdown: React.FC<Props> = ({ items, onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const placeholder = {
          label: 'Select an option...',
          value: null,
          color: '#9EA0A4',
        };

  const handleValueChange = (value: string | null) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={items}
        placeholder={placeholder}
        style={{
          inputWeb: styles.input,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    width:220,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#333',
    textAlign: 'center',
  },
});

export default SearchDropdown;