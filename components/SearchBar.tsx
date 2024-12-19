import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = () => {
    const [text, onChangeText] = useState('')
  return (
    <View style={{
            flexDirection: 'row', 
            alignItems:'center',
            marginLeft: 20, 
            borderWidth: 1,
            paddingHorizontal: 10,
         }}>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='SEARCH'
      />
      <Ionicons name="search" size={24} color="gray" />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderColor: 'transparent',
        borderWidth: 1,
        padding: 4,
        letterSpacing: 2,
    }
})