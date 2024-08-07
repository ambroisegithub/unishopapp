import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { router } from "expo-router";

const CategoryList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <Ionicons
          name="arrow-back"
          size={20}
          color="#000"
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        />
        <Text style={styles.header}>Clothes</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.productCard} onPress={()=>{
          router.push("/Screen/ItemDetails")
        }}>
          <Image
            source={require("../../assets/images/opilover.png")}
            style={styles.productImage}
          />
          <Text style={styles.productName}>T-Shirt</Text>
          <Text style={styles.productPrice}>RWF 2,000</Text>
          <Ionicons
            name="ellipse"
            size={16}
            color="green"
            style={styles.availabilityIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require("../../assets/images/jeans.png")}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Jeans</Text>
          <Text style={styles.productPrice}>RWF 7,000</Text>
          <Ionicons
            name="ellipse"
            size={16}
            color="red"
            style={styles.availabilityIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require("../../assets/images/dress.png")}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Dress</Text>
          <Text style={styles.productPrice}>RWF 9,000</Text>
          <Ionicons
            name="ellipse"
            size={16}
            color="red"
            style={styles.availabilityIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require("../../assets/images/MenShirt.png")}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Shirt</Text>
          <Text style={styles.productPrice}>RWF 13,000</Text>
          <Ionicons
            name="ellipse"
            size={16}
            color="red"
            style={styles.availabilityIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require("../../assets/images/jacket.png")}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Jacket</Text>
          <Text style={styles.productPrice}>RWF 14,000</Text>
          <Ionicons
            name="ellipse"
            size={16}
            color="red"
            style={styles.availabilityIcon}
          />
        </TouchableOpacity>
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
  headerIcon: {
    flexDirection: "row",
    width: "70%",
    gap: 80,
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productCard: {
    borderRadius: 8,
    padding: 16,
    width: "48%",
    shadowColor: "#0C0C0C",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    objectFit:"fill",
    marginLeft:20
  },
  productName: {
    fontSize: 14,
    color: "#0C0C0C",
    marginBottom:2,
  },
  productPrice: {

    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  availabilityIcon: {
    position: "absolute",
    bottom: 20,
    right: 15,
  },
});

export default CategoryList;
