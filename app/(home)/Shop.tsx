import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
const categories = [
  {
    id: "1",
    name: "Utilities",
    icon: require("../../assets/images/BookStack.png"),
  },
  { id: "2", name: "Food", icon: require("../../assets/images/Spaghetti.jpg") },
  {
    id: "3",
    name: "Clothes",
    icon: require("../../assets/images/Clothes.jpg"),
  },
  {
    id: "4",
    name: "Utilities",
    icon: require("../../assets/images/BookStack.png"),
  },
  { id: "5", name: "Food", icon: require("../../assets/images/Spaghetti.jpg") },
  {
    id: "6",
    name: "Clothes",
    icon: require("../../assets/images/Clothes.jpg"),
  },
];

const products = [
  {
    id: "1",
    name: "Face Mask",
    price: "RWF 200",
    image: require("../../assets/images/mask.jpg"),
  },
  {
    id: "2",
    name: "Macaroni",
    price: "RWF 1,000",
    image: require("../../assets/images/Pasta-roundl.jpg"),
  },
  {
    id: "3",
    name: "Face Mask",
    price: "RWF 200",
    image: require("../../assets/images/mask.jpg"),
  },
  {
    id: "4",
    name: "Macaroni",
    price: "RWF 1,000",
    image: require("../../assets/images/Pasta-roundl.jpg"),
  },
];

const Shop = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.unshopmainHeader}>
        <Text style={styles.header}>Unishop</Text>
        <Text style={styles.subHeader}>Buy now, pay later</Text>
      </View>

      <ScrollView style={styles.subContainer}>
        <View
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
        >
          <Ionicons
            name="search"
            size={20}
            color="#B3C2FF"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search in the shop"
            placeholderTextColor="#C4C4C4"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView style={styles.productSection}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryCard}
                onPress={() => {
                  router.push("../Screen/CategoryList");
                }}
              >
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </ScrollView>

        <Text style={styles.sectionTitle}>In stock</Text>
        <ScrollView style={styles.productSection}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 4,
    width: "90%",
    marginLeft: 18,
    marginTop: 20,
    borderRadius: 12,
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: "#246BFD",
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  productSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0C0C0C",
    paddingLeft: 20,
  },
  categoryList: {
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: "#F2F3F4",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginRight: 16,
    width: 100,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
    objectFit: "fill",
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#333",
    textAlign: "center",
  },
  productList: {
    marginBottom: 24,
  },
  productCard: {
    borderRadius: 12,
    marginRight: 16,
    width: 180,
  },
  productImage: {
    width: 120,
    height: 100,
    marginBottom: 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: 30,
  },
  productName: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#0C0C0C",
    marginBottom: 3,
  },
  productPrice: {
    fontSize: 14,
    color: "#0C0C0C",
    fontWeight: "bold",
  },
  subContainer: {
    width: "100%",
    backgroundColor: "white",
    zIndex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -23,
  },
});

export default Shop;
