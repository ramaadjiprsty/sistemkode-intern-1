import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';


const CartButton: React.FC = () => {
  const [cart, setCart] = useState<number>(0);

  return (
    <View style={styles.button}>
      <Button
        title={`Cart (${cart})`}
        color="#FF9611"
        onPress={() => setCart(cart + 1)}
      />
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
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