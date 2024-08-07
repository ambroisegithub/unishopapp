import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const { width } = Dimensions.get("window");

const Login = () => {
  const router = useRouter();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login Data: ", formData);
    // Perform login logic here, e.g., API call
    // router.push("/Home"); // Navigate to Home after login
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/UniCashLogo1.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.labelTitle}>Email</Text>
        <TextInput
          placeholder="mugishaprosper@gmail.com"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
          placeholderTextColor="#040C22"
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
        />
        <Text style={styles.labelTitle}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="••••••••••••"
            style={[styles.input, focusedInput === 'password' && styles.inputFocused]}
            placeholderTextColor="#040C22"
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={!showPassword}
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showhideIcon}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#246BFD" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>{
            router.push("./Signup")
          }}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 284,
    height: 64,
    resizeMode: "contain",
  },
  loginContainer: {
    width: "100%",
    // paddingLeft: 32,
    padding:30
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#240F51",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#040C22",
    fontSize: 14,
  },
  inputFocused: {
    borderColor: "#246BFD",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  showhideIcon: {
    position: "absolute",
    right: 8,
    top: 15,
  },
  forgotPassword: {
    color: "#246BFD",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    width: "90%",
  },
  button: {
    backgroundColor: "#246BFD",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 100,
    alignItems: "center",
    marginTop: 40,
    justifyContent:"center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#246BFD",
    fontWeight: "bold",
    marginLeft: 5,
  },
  labelTitle: {
    color: "#8F94A3",
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default Login;
