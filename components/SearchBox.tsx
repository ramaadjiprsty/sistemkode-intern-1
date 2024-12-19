import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import SearchDropdown from './DropDown';


type CardType = '3-Step Easy Search' | 'Search By Serial Number' | null;

const SearchBox: React.FC = () => {
    const handleValueChange = (value: string | null) => {
        console.log('Selected value:', value);
      };
    
      const brand = [
        { label: '1. Printer Brand', value: 'option1' },
        { label: '2. Printer Brand', value: 'option2' },
        { label: '3. Printer Brand', value: 'option3' },
      ];
      const series = [
        { label: '1. Printer Series', value: 'option1' },
        { label: '2. Printer Series', value: 'option2' },
        { label: '3. Printer Series', value: 'option3' },
      ];
      const model = [
        { label: '1. Printer Model', value: 'option1' },
        { label: '2. Printer Model', value: 'option2' },
        { label: '3. Printer Model', value: 'option3' },
      ];

  const [selectedCard, setSelectedCard] = useState<CardType>('3-Step Easy Search');

  const handleSelectCard = (card: CardType) => {
    setSelectedCard(card);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={[styles.card, selectedCard === '3-Step Easy Search' && styles.selectedCard]}
        onPress={() => handleSelectCard('3-Step Easy Search')}
        activeOpacity={1}
      >
        <Text style={{padding:30, color: 'white', fontSize: 20}}>3-Step Easy Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, selectedCard === 'Search By Serial Number' && styles.selectedCard]}
        onPress={() => handleSelectCard('Search By Serial Number')}
        activeOpacity={1}
      >
        <Text style={{padding:30, color: 'white', fontSize: 20}}>Search By Serial Number</Text>
      </TouchableOpacity>
      </View>
    
    <View style={{ width:1000,  backgroundColor: 'white', paddingVertical: 30}}>
      {/* Conditional Rendering */}
      {selectedCard === '3-Step Easy Search' && (
        <View style={{
          height: 50,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20
        }}>
        <SearchDropdown
            items={brand}
            onValueChange={handleValueChange}
        />
        <SearchDropdown
            items={series}
            onValueChange={handleValueChange}
        />
        <SearchDropdown
            items={model}
            onValueChange={handleValueChange}
        />
        <View style={styles.button}>
              <Button
                title="FIND CARTIDGES"
                color="#FF9611"
              />
            </View>
        </View>
      )}
      {selectedCard === 'Search By Serial Number' && (
        <View style={{height: 50}}>
            <Text style={{ margin: 'auto'}}>Not Implemented Yet!</Text>
        </View>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },
  card: {
    width: 500,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
  },
  selectedCard: {
    backgroundColor: '#1B7ACD',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    width: 150,
    marginLeft: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});

export default SearchBox;
