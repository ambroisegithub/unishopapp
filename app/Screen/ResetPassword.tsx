import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ResetPassword = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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
        <Text style={styles.header}>Reset Password</Text>
      </View>

      <View>
        <Text style={styles.labelTitle}>
        Enter your new credentials
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Old Password</Text>
          <TextInput
            placeholder="••••••••••••"
            style={[styles.input, focusedInput === 'oldPassword' && styles.inputFocused]}
            placeholderTextColor="#040C22"
            onFocus={() => setFocusedInput('oldPassword')}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showhideIcon}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#246BFD" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            placeholder="••••••••••••"
            style={[styles.input, focusedInput === 'newPassword' && styles.inputFocused]}
            placeholderTextColor="#040C22"
            onFocus={() => setFocusedInput('newPassword')}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showhideIcon}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#246BFD" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm New Password</Text>
          <TextInput
            placeholder="••••••••••••"
            style={[styles.input, focusedInput === 'confirmPassword' && styles.inputFocused]}
            placeholderTextColor="#040C22"
            onFocus={() => setFocusedInput('confirmPassword')}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showhideIcon}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#246BFD" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },
  headerIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    justifyContent:"space-between",
    width:"60%",
    paddingTop:40,
  },
  backIcon: {
    marginRight: 16,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#8F94A3",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 11,
  },
  labelTitle:{
    color: "#8F94A3",
    fontWeight: "semibold",
    marginBottom: 25,
    fontSize: 14, 
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#040C22",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#246BFD",
  },
  showhideIcon: {
    position: "absolute",
    right: 12,
    top: 35,
  },
  button: {
    backgroundColor: "#246BFD",
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ResetPassword;
