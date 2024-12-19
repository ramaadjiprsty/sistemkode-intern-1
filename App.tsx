import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Product, ProductCard } from "./components/CardProduct";
import CartButton from "./components/CartButton";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [activeTab, setActiveTab] = useState("HOME");
  const tabs = [
    "HOME",
    "INK CARTRIDGES",
    "TONER CARTRIDGES",
    "CONTACT US",
    "LOGIN / REGISTER",
  ];

  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleNext = () => {
    if (currentIndex < products.length - 3) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    }
  };

  const products: Product[] = [
    {
      id: "1",
      name: "HP 62 Black Ink Cartridge",
      image: require("./assets/product-img.png"),
      price: "$9.49",
    },
    {
      id: "2",
      name: "Canon MF-3110 Toner",
      image: require("./assets/product-img2.png"),
      price: "$36.45",
    },
    {
      id: "3",
      name: "HP 62 Black Ink Cartridge",
      image: require("./assets/product-img.png"),
      price: "$9.49",
      discountedPrice: "$5.99",
    },
    {
      id: "4",
      name: "Brother Ink Cartridge",
      image: require("./assets/product-img2.png"), // Replace with actual image
      price: "$12.99",
    },
    {
      id: "5",
      name: "Epson Toner",
      image: require("./assets/product-img.png"), // Replace with actual image
      price: "$29.99",
    },
    {
      id: "6",
      name: "Brother Ink Cartridge",
      image: require("./assets/product-img2.png"), // Replace with actual image
      price: "$12.99",
    },
    {
      id: "7",
      name: "Epson Toner",
      image: require("./assets/product-img.png"), // Replace with actual image
      price: "$29.99",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: '#F9F9F9'}}>
      <View style={styles.contact}>
        <FlatList
          data={[
            { key: "Franchise Opportunities" },
            { key: "Help" },
            { key: "Feedback" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            flexGrow: 1,
            padding: 10,
            justifyContent: "center",
          }}
        />

        <FlatList
          data={[{ key: "hello@email.com" }, { key: "0800 022 2 022" }]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            // borderWidth: 1,
            gap: 10,
            padding: 10,
            justifyContent: "center",
            flexGrow: 1,
          }}
        />
      </View>

      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("./assets/CartridgeIcon.png")} />
          <Text style={styles.textLogo}>CARTRIDGE KINGS</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <SearchBar />

          <CartButton />
        </View>
      </View>
      <View style={styles.navigationBar}>
        {tabs.map((tab, index) => (
          <NavigationBar
            key={index}
            title={tab}
            active={activeTab === tab}
            onPress={() => setActiveTab(tab)}
          />
        ))}
      </View>
      <View style={styles.hero}>
        <Hero
          title="FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER"
          image={require("./assets/hero-image.jpg")}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.productTitle}>FEATURED PRODUCTS</Text>
          <View style={styles.navigationContainer}>
            <TouchableOpacity
              onPress={handlePrev}
              disabled={currentIndex === 0}
            >
              <Text
                style={[
                  styles.arrow,
                  currentIndex === 0 && styles.disabledArrow,
                ]}
              >
                {"<"}
              </Text>
            </TouchableOpacity>

            <FlatList
              ref={flatListRef}
              data={products}
              renderItem={({ item }) => <ProductCard {...item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productList}
              scrollEnabled={false} // Disable manual scrolling to enforce arrow usage.
            />

            <TouchableOpacity
              onPress={handleNext}
              disabled={currentIndex >= products.length - 3}
            >
              <Text
                style={[
                  styles.arrow,
                  currentIndex >= products.length - 3 && styles.disabledArrow,
                ]}
              >
                {">"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contact: {
    width: Dimensions.get("window").width,
    backgroundColor: "#E8E8E8",
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    textAlign: "center",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 40,
    marginHorizontal: 6,
  },
  textLogo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    marginTop: 40,
  },
  productList: {
    flexDirection: "row",
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('screen').width-300,
  },
  arrow: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 40,
    color: "#333",
  },
  disabledArrow: {
    color: "#ccc",
  },
});
