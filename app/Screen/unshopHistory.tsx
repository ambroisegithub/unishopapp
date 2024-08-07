import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const unshopHistory = () => {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcon}>
        <Ionicons
          name="arrow-back"
          size={20}
          color="#000"
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        />
        <Text style={styles.header}>Unshop History</Text>
      </View>

      <View style={styles.purchaseItem}>
        <Text style={styles.date}>20/11/2022</Text>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Books (2)</Text>
          <Text style={styles.amount}>RWF 2,000</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Pen (1)</Text>
          <Text style={styles.amount}>RWF 150</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Macaroni (1)</Text>
          <Text style={styles.amount}>RWF 14,000</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountTotal}>Total</Text>
          <Text style={styles.amountTotal}>RWF 3,500</Text>
        </View>
      </View>

      <View style={styles.purchaseItem}>
        <Text style={styles.date}>20/11/2022</Text>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Books (2)</Text>
          <Text style={styles.amount}>RWF 2,000</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Pen (1)</Text>
          <Text style={styles.amount}>RWF 150</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Macaroni (1)</Text>
          <Text style={styles.amount}>RWF 14,000</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountTotal}>Total</Text>
          <Text style={styles.amountTotal}>RWF 3,500</Text>
        </View>
      </View>
      <View style={styles.purchaseItem}>
        <Text style={styles.date}>20/11/2022</Text>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Books (2)</Text>
          <Text style={styles.amount}>RWF 2,000</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Pen (1)</Text>
          <Text style={styles.amount}>RWF 150</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Macaroni (1)</Text>
          <Text style={styles.amount}>RWF 14,000</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountTotal}>Total</Text>
          <Text style={styles.amountTotal}>RWF 3,500</Text>
        </View>
      </View>

      <View style={styles.summary}>
        <View style={styles.totalRow}>
          <Text style={styles.summaryTitleTotal}>TOTAL LOAN:</Text>
          <Text style={styles.summaryAmountTotal}>RWF 17,520</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.summaryTitleInterset}>Total Interest:</Text>
          <Text style={styles.summaryAmountInterest}>RWF 1,750</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.summaryTitleTotalPay}>TOTAL PAYMENT:</Text>
          <Text style={styles.summaryAmountTotalPay}>RWF 19,270</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
  backIcon: {
    marginBottom: 16,
  },
  purchaseItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#9CA3AF",
    marginBottom: 5,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    fontSize: 13,
    color: "#09042F",
    fontWeight: "bold",
  },
  amount: {
    fontSize: 13,
    color: "#09042F",
    fontWeight: "bold",
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#246BFD",
    marginTop: 5,
  },
  summary: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  summaryTitle: {
    fontSize: 14,
    color: "#8F94A3",
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#246BFD",
  },
  summaryTitleTotal: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#000000",
  },
  summaryAmountTotal: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#000000",
  },

  summaryTitleInterset: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#000000",
  },
  summaryAmountInterest: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#000000",
  },
  summaryTitleTotalPay: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  summaryAmountTotalPay: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  amountTotal: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default unshopHistory;
