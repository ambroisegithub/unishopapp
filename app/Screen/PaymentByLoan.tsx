import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";

const PaymentByLoan = () => {
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
        <Text style={styles.header}>Pay by loan</Text>
      </View>
      <View style={styles.QrContainer}>
        <Image
          source={require("@/assets/images/Qr_code_SelfieDuMacaque 1.png")}
        />
      </View>
      <View style={styles.textinstruction}>
          <Text style={styles.confirmation}>
            The shop manager must scan this QR Code
          </Text>
          <Text style={styles.confirmation}>to complete the purchase</Text>
        </View>
      <View style={styles.buttomPay}>


        <View style={styles.payButtonContainer}>
          <TouchableOpacity style={styles.payButton}
          onPress={()=>{
            router.push("/Screen/Reciept")
          }}
          >
            <Text style={styles.payText}>Complete purchase</Text>
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
  },
  headerIcon: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    gap: 100,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 16,
  },
  backIcon: {
    // marginBottom: 16,
  },
  phoneInput: {
    height: 50,
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  instruction: {
    fontSize: 12,
    color: "#8F94A3",
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  confirmation: {
    fontSize: 12,
    color: "#8F94A3",
    marginBottom: 4,
    textAlign: "center",
  },
  payButton: {
    backgroundColor: "#304FFE",
    padding: 16,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  payText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttomPay: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  payButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 16,
  },
  detailsContainer: {
    padding: 16,
  },
  textinstruction: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:30
  },
  QrContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PaymentByLoan;
