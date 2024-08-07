import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const Reciept = () => {
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
        <Text style={styles.header}>Receipt</Text>
      </View>

      <View style={styles.textinstruction}>
        <Text style={styles.businessName}>Qr Cafe</Text>
        <Text>5*****78689</Text>
        <Text style={styles.paymentStatus}>Payment Success</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.instructionContainer}>
          <Text>Transaction Number</Text>
          <Text style={styles.transactionNumber}>#943NAJ932</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text>Time</Text>
          <Text style={styles.transactionNumber}>9:41 AM</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text>Money Sent</Text>
          <Text style={styles.transactionNumber}>$25</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text>Admin Fee</Text>
          <Text style={styles.transactionNumber}>$0</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text>They Receive</Text>
          <Text style={styles.transactionNumber}>$25</Text>
        </View>
      </View>

      <View style={styles.buttomPay}>
        <View style={styles.payButtonContainer}>
          <Text style={styles.confirmation}>
            Have a problem with your transaction?
          </Text>
          <TouchableOpacity>
            <Text style={styles.tellUsText}>Tell us now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payText}>Download Receipt</Text>
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
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 16,
  },
  backIcon: {},
  textinstruction: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  businessName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paymentStatus: {
    fontSize: 16,
    color: "#304FFE",
    marginBottom: 24,
  },
  detailsContainer: {
    padding: 16,
  },
  instructionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  transactionNumber: {
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
    padding: 16,
  },
  confirmation: {
    fontSize: 12,
    color: "#8F94A3",
    marginBottom: 4,
    textAlign: "center",
  },
  tellUsText: {
    color: "#304FFE",
    marginBottom: 8,
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
});

export default Reciept;
