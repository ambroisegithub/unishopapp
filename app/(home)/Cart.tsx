import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { router } from "expo-router";

type RouteParams = {
  item: {
    name: string;
    price: string;
    image: any;
  };
  quantity: number;
};

type RootStackParamList = {
  Cart: RouteParams;
};

const Cart = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "Cart">>();

  const {
    item = {
      name: "",
      price: "RWF 0",
      image: require("../../assets/images/opilover.png"),
    },
    quantity = 0,
  } = route.params || {};

  const total = parseFloat(item.price.split(" ")[1]) * quantity;

  return (
    <View style={styles.container}>
      <View style={styles.unshopmainHeader}>
        <Text style={styles.header}>Cart</Text>
        <Text style={styles.subHeader}>
          Items you added to cart appear here
        </Text>
      </View>
      <View style={styles.cartItemContainer}>
        <View style={styles.cartItem}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.itemDetails}>
            <View>
              <Text style={styles.productName}>T-Shirt</Text>
              <Text style={styles.productPrice}>RWF 2,000</Text>
            </View>

            <View style={styles.quantityContainer}>
              <View>
                <TouchableOpacity style={styles.deleteButton}>
                  <Ionicons name="trash" size={20} color="#FF0000" />
                </TouchableOpacity>
              </View>
              <View style={styles.iconrow}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Ionicons name="remove" size={16} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Ionicons name="add" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerbottom}>
        <View style={styles.totalText}>
          <Text style={styles.total}>TOTAL:</Text>
          <Text style={styles.total}>RWF 2,000</Text>
        </View>
        <View style={styles.addbuttonContainer}>
          <TouchableOpacity style={styles.addToCartButton}
          onPress={()=>{
            router.push("/Screen/Checkout")
          }}
          >
            <Text style={styles.addToCartText}>Checkout</Text>
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
    paddingTop: 40,
  },
  unshopmainHeader: {
    backgroundColor: "#304FFE",
    width: "100%",
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  subHeader: {
    fontSize: 12,
    color: "#ffff",
    marginBottom: 24,
  },
  cartItemContainer: {
    backgroundColor: "white",
    paddingTop: 50,
    zIndex: 1,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 200,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    justifyContent: "space-between",
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemDetails: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityButton: {
    padding: 1,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
    marginTop: 6,
  },
  deleteButton: {
    marginLeft: 50,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  checkoutButton: {
    backgroundColor: "#304FFE",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  iconrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#304FFE",
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
    width: "97%",
  },
  addbuttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  totalText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  containerbottom: {
    width: "100%",
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default Cart;
