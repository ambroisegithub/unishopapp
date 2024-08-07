import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const PaymentByMomo = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

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
        <Text style={styles.header}>Pay by momo</Text>
      </View>
      <View style={styles.detailsContainer}>
        <TextInput
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
          placeholder="Phone number"
          keyboardType="phone-pad"
          placeholderTextColor="#B0B0B0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.textinstruction}>
          <Text style={styles.instruction}>
            If you don't see the popup on your phone use{" "}
          </Text>
          <Text style={styles.instruction}>
            <Text style={styles.boldText}>*182*7*1# </Text> to confirm your
            payment
          </Text>
        </View>
      </View>

      <View style={styles.buttomPay}>
        <View style={styles.textinstruction}>
          <Text style={styles.confirmation}>
            Once the payment is confirmed you will
          </Text>
          <Text style={styles.confirmation}>be offered the item</Text>
        </View>

        <View style={styles.payButtonContainer}>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payText}>Pay</Text>
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
    padding:10
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: "#246BFD",
  },
});

export default PaymentByMomo;
