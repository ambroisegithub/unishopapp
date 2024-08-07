import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
const { width } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View style={styles.ProfileContainer}>
          <Image
            source={require("@/assets/images/Memoji.png")}
            style={styles.ProfileImage}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.username}>Mugisha Prosper</Text>
          <Text style={styles.email}>mugishaprosper@gmail.com</Text>
        </View>
        <TouchableOpacity onPress={()=>{
          router.push("/Screen/EditProfile")
        }}>
          <Image
            source={require("@/assets/images/editIcon.png")}
            style={styles.EditIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={()=>{
          router.push("/Screen/Mystatement")
        }}>
          <Icon name="user" color="#304FFE" size={24} />
          <Text style={styles.menuText}>My statement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>{
          router.push("/Screen/unshopHistory")
        }}>
          <Entypo name="user" color="#304FFE" size={24} />
          <Text style={styles.menuText}>UniShop history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>{
          router.push("/Screen/ResetPassword")
        }}>
          <AntDesign name="setting" color="#304FFE" size={24} />
          <Text style={styles.menuText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>{
          router.push("/Screen/termCondition")
        }}>
          <AntDesign name="questioncircle" color="#304FFE" size={24} />
          <Text style={styles.menuText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="phone" color="#304FFE" size={24} />
          <Text style={styles.menuText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 15,
    padding: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  email: {
    fontSize: 13,
    color: "#fff",
    marginTop: 10,
  },
  menu: {
    marginBottom: 20,
    padding: 20,
    zIndex: 1,
    marginTop: -24,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
  },
  menuText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#304FFE",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 50,
    width: "90%",
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 16,
  },
  ProfileContainer: {
    backgroundColor: "#FFD9AF",
    height: 50,
    width: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileImage: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
  },
  EditIcon: {
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
  },
  mainHeader: {
    backgroundColor: "#304FFE",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButtonContainer: {
    alignItems: "center",
  },
});

export default Profile;
