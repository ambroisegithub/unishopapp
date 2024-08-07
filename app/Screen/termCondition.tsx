import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const TermCondition = () => {
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
              <Text style={styles.header}>Terms and Conditions</Text>

      </View>
      <Text style={styles.intro}>These are our terms and conditions</Text>
      
      <Text style={styles.body}>
        These terms and conditions govern the use of the Loan Repayment feature, which allows borrowers to automatically repay their loans from their bursary funds once they are deposited into the app.
      </Text>
      
      <Text style={styles.body}>
        To be eligible for the Loan Repayment feature, you must:
      </Text>
      <Text style={styles.listItem}>• Be an active user of the app</Text>
      <Text style={styles.listItem}>• Have a valid bursary BRD</Text>
      
      <Text style={styles.body}>
        Once your bursary funds are deposited into the app, they will be automatically applied to repay your outstanding loan balance. If you have multiple loans, the funds will be applied to each loan in proportion to the outstanding balance.
      </Text>
      
      <Text style={styles.body}>
        The company may change these terms and conditions at any time without notice. Any changes will be effective immediately upon posting on the app.
      </Text>
      <View  style={styles.FooterContainer}>
      <Text style={styles.footer}>* You have accepted these terms and conditions</Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  intro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#210EA4"
  },
  body: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 23,
    color:"#6C727F"
  },
  listItem: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
    color:"#6C727F",

  },
  headerIcon: {
    flexDirection: "row",
    width: "70%",
    gap: 80,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  backIcon: {
    marginBottom: 16,
  },
  footer: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 20,
    fontWeight:"semibold"

  },
  FooterContainer:{
    alignItems:"center",
    justifyContent:"center",
  
  }
});

export default TermCondition;
