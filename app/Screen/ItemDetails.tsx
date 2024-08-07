import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { router } from "expo-router";

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  available: boolean;
}

interface RouteParams {
  item: Product;
}

const ItemDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params as RouteParams;

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const defaultImage = require("../../assets/images/opilover.png");

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#000"
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />
      <Image source={item?.image || defaultImage} style={styles.productImage} />
      <View style={styles.subDetailsContainer}>
        <View>
          <Text style={styles.productName}>T-Shirt</Text>
          <Text style={styles.productPrice}>RWF 2,000</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decrementQuantity}
            style={styles.quantityButton}
          >
            <Ionicons name="remove" size={16} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={incrementQuantity}
            style={styles.quantityButton}
          >
            <Ionicons name="add" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.productDescription}>
        This will be the description of the item and the materials the item is
        made of.
      </Text>
      <View style={styles.totalView}>
        <View style={styles.totalText}>
          <Text style={styles.total}>TOTAL:</Text>
          <Text style={styles.total}>RWF 2,000</Text>
        </View>

        <Text style={styles.eligibility}>
          * You are eligible for RWF {item?.price.split(" ")[1] || "0"}
        </Text>
        <View style={styles.addbuttonContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => {
              router.push("/Cart");
            }}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FB",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  backIcon: {
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  productName: {
    fontSize: 14,
    color: "#0C0C0C",
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityButton: {
    padding: 1,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 10,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 16,
    marginTop: 9,
  },
  productDescription: {
    fontSize: 13,
    color: "#000000",
    marginBottom: 24,
    paddingRight: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  eligibility: {
    fontSize: 12,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 24,
  },
  addToCartButton: {
    backgroundColor: "#304FFE",
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
    width: "97%",
  },
  addToCartText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  subDetailsContainer: {
    height: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingRight: 10,
  },
  totalText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  totalView: {
    marginTop: 80,
  },
  addbuttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemDetails;
