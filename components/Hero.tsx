import React from 'react'
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import SearchBox from './SearchBox'

interface HeroProps {
    image: ImageSourcePropType
    title: string
}

const Hero: React.FC<HeroProps> = ({ image, title }) => {
    return (
      <ImageBackground 
        source={image}
        style={styles.image}
      >
       <View style={styles.textBackground} />
      <Text style={styles.textStyle}>{title}</Text> 
      <View>
        <SearchBox/>
    </View>
      </ImageBackground>
    )
  }
  
  export default Hero;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
        alignItems: 'center',
    },
    textBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    textStyle: {
        fontSize: 35, 
        fontWeight: '500', 
        letterSpacing: 5,
        color: 'white',
        paddingVertical: 40
    }
})