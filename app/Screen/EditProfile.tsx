import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
const EditProfile = () => {
  const [email, setEmail] = useState("mugishaprosper@gmail.com");
  const [fullName, setFullName] = useState("MUGISHA Prosper");
  const [phoneNumber, setPhoneNumber] = useState("0783309919");
  const [idNumber, setIdNumber] = useState("1199980183423165");
  const [bankAccount, setBankAccount] = useState("7423791032341549");
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const handleSave = () => {
    console.log("Profile updated:", {
      email,
      fullName,
      phoneNumber,
      idNumber,
      bankAccount,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerIcon}>
          <Ionicons
            name="arrow-back"
            size={20}
            color="#000"
            onPress={() => navigation.goBack()}
            style={styles.backIcon}
          />
          <Text style={styles.header}>Edit Profile</Text>
        </View>
        <View style={styles.ProfileContainerMain}>
          <View style={styles.ProfileContainer}>
            <Image
              source={require("@/assets/images/Memoji.png")}
              style={styles.ProfileImage}
            />
          </View>
          <View style={styles.cameraContainer}>
            <TouchableOpacity style={styles.cameraButton}>
              <FontAwesome6 name="camera" size={15} color="#E9E9FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.inputLabel}>Email</Text>
        <View
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <Text style={styles.inputLabel}>Full names</Text>

        <View
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
        >
          <TextInput
            style={styles.input}
            placeholder="Full names"
            value={fullName}
            onChangeText={setFullName}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <Text style={styles.inputLabel}>Phone number</Text>

        <View
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
        >
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <Text style={styles.inputLabel}>ID Number</Text>

        <View
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
        >
          <TextInput
            style={styles.input}
            placeholder="ID Number"
            value={idNumber}
            onChangeText={setIdNumber}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <Text style={styles.inputLabel}>Bursary Bank Account</Text>

        <View
          style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}
        >
          <TextInput
            style={styles.input}
            placeholder="Bursary Bank Account"
            value={bankAccount}
            onChangeText={setBankAccount}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Edit profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  saveButton: {
    backgroundColor: "#304FFE",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 50,

  },
  saveText: {
    color: "#ffffff",
    fontSize: 16,
  },
  EditIcon: {
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
  },
  ProfileContainer: {
    backgroundColor: "#FFD9AF",
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileContainerMain: {
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileImage: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
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
  cameraContainer: {
    position: "absolute",
    bottom: -10,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    right: 130,
  },
  headerContainer: {
    marginBottom: 50,
  },
  cameraButton: {
    backgroundColor: "#928FFF",
    padding: 5,
    borderRadius: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 4,
    width: "100%",
    marginTop: 5,
    borderRadius: 12,
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: "#246BFD",
  },
  inputLabel: {
    fontSize: 11,
    color: "#8F94A3",
    fontWeight:"bold"
  },
});

export default EditProfile;
