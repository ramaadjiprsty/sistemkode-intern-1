import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ImageSourcePropType, Dimensions } from 'react-native';

export interface Product {
  id: string;
  name: string;
  image: ImageSourcePropType;
  price: string;
  discountedPrice?: string;
}

const CARD_WIDTH = Dimensions.get('window').width / 3;

export const ProductCard: React.FC<Product> = ({ name, image, price, discountedPrice }) => {
  return (
    <View style={[styles.card]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.productName}>{name}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width:250}}>
      <View style={styles.priceContainer}>
        {discountedPrice ? (
          <>
            <Text style={styles.originalPrice}>{price}</Text>
            <Text style={styles.discountedPrice}>{discountedPrice}</Text>
          </>
        ) : (
          <Text style={styles.price}>{price}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    // borderWidth:1,
  },
  priceContainer: {
    alignItems: 'center',
    // borderWidth:1,
    justifyContent: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e53935',
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 10,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  button: {
    backgroundColor: '#ff9800',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
