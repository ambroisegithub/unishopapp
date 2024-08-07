import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <Ionicons
          name="chevron-back"
          size={20}
          color="#000"
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        />
        <Text style={styles.header}>Checkout</Text>
      </View>
      <Text style={styles.summaryTitle}>Summary of your purchase</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.item}>T-Shirt (1)</Text>
        <Text style={styles.price}>RWF 2,000</Text>
      </View>

      <Text style={styles.paymentMethodTitle}>Payment method</Text>
      <TouchableOpacity style={styles.paymentOption} 
      onPress={()=>{
        router.push("../Screen/PaymentByLoan");

      }}
      >
        <View>
          <Text style={styles.paymentMethod}>UNICASH</Text>
          <Text style={styles.price}>RWF 2,000</Text>
          <Text style={styles.interest}>You will pay RWF 160 Interest</Text>
        </View>
        <View>
          <AntDesign
            name="right"
            size={20}
            color="#000"
            style={styles.backIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentOption} onPress={()=>{
        router.push("../Screen/PaymentByMomo");

      }}>
        <View>
          <Text style={styles.paymentMethod}>MOMO</Text>
          <Text style={styles.price}>RWF 2,000</Text>
          <Text style={styles.interest}>You will pay no Interest</Text>
        </View>
        <View>
          <AntDesign
            name="right"
            size={20}
            color="#000"
            style={styles.backIcon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue to payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F6F8FB",
  },
  backButton: {
    marginBottom: 16,
  },
  headerIcon: {
    flexDirection: "row",
    width: "70%",
    gap: 80,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
  backIcon: {
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: "#0C0C0C",
  },
  summaryBox: {
    padding: 16,
    backgroundColor: "#E9E9FF",
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 150,
  },
  item: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:5

  },
  paymentMethodTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: "#0C0C0C",
    fontWeight: "bold",
  },
  paymentOption: {
    padding: 16,
    backgroundColor: "#E9E9FF",
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentMethod: {
    fontSize: 16,
    marginBottom:5
  },
  interest: {
    fontSize: 12,
    color: "#8F94A3",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: "#304FFE",
    padding: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Checkout;
