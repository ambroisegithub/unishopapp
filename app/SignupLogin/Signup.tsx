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
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "../../app/(home)/index"
const { width } = Dimensions.get("window");

const Signup = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    idNumber: "",
    bankAccount: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Final Data: ", formData);
      // router.push(Home);
    }
  };
  const HandleHomePage=()=>{
    router.push("/(home)")

  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/UniCashLogo1.png")}
                style={styles.logo}
              />
            </View>
            <View style={styles.RegisterContainer}>
              <Text style={styles.registerTitle}>Register</Text>
              <Text style={styles.titlewelcome}>Welcome to Unicash</Text>
              <Text style={styles.filldetails}>
                Fill in your details to make an account
              </Text>
              <Text style={styles.labelTitle}>Email</Text>
              <TextInput
                placeholder="Emmugishaprosper@gmail.com"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
                style={[
                  styles.input,
                  focusedInput === "email" && styles.inputFocused,
                ]}
                placeholderTextColor="#040C22"
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
              <Text style={styles.labelTitle}>Full Names</Text>
              <TextInput
                placeholder="MUGISHA Prosper"
                value={formData.fullName}
                onChangeText={(text) =>
                  setFormData({ ...formData, fullName: text })
                }
                style={[
                  styles.input,
                  focusedInput === "fullName" && styles.inputFocused,
                ]}
                placeholderTextColor="#040C22"
                onFocus={() => setFocusedInput("fullName")}
                onBlur={() => setFocusedInput(null)}
              />
              <Text style={styles.labelTitle}>Phone Number</Text>
              <TextInput
                placeholder="0783309919"
                style={[
                  styles.input,
                  focusedInput === "phoneNumber" && styles.inputFocused,
                ]}
                placeholderTextColor="#040C22"
                onFocus={() => setFocusedInput("phoneNumber")}
                onBlur={() => setFocusedInput(null)}
                value={formData.phoneNumber}
                onChangeText={(text) =>
                  setFormData({ ...formData, phoneNumber: text })
                }
              />
              <View style={styles.alreadyhave}>
                <Text>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    router.push("./Login");
                  }}
                >
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Icon name="arrow-back" size={24} color="#000" />
              <Text style={styles.backText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>We need more of your information</Text>
              <TextInput
                placeholder="ID Number"
                style={[
                  styles.input,
                  focusedInput === "idNumber" && styles.inputFocused,
                ]}
                placeholderTextColor="#040C22"
                onFocus={() => setFocusedInput("idNumber")}
                onBlur={() => setFocusedInput(null)}
                value={formData.idNumber}
                onChangeText={(text) =>
                  setFormData({ ...formData, idNumber: text })
                }
              />
              <TextInput
                placeholder="Bursary Bank Account"
                style={[
                  styles.input,
                  focusedInput === "bankAccount" && styles.inputFocused,
                ]}
                placeholderTextColor="#040C22"
                onFocus={() => setFocusedInput("bankAccount")}
                onBlur={() => setFocusedInput(null)}
                value={formData.bankAccount}
                onChangeText={(text) =>
                  setFormData({ ...formData, bankAccount: text })
                }
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Password"
                  style={[
                    styles.input,
                    focusedInput === "password" && styles.inputFocused,
                  ]}
                  placeholderTextColor="#040C22"
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput(null)}
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(text) =>
                    setFormData({ ...formData, password: text })
                  }
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.showhideIcon}
                >
                  <Icon
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={24}
                    color="#246BFD"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Confirm Password"
                  style={[
                    styles.input,
                    focusedInput === "confirmPassword" && styles.inputFocused,
                  ]}
                  placeholderTextColor="#040C22"
                  onFocus={() => setFocusedInput("confirmPassword")}
                  onBlur={() => setFocusedInput(null)}
                  secureTextEntry={!showConfirmPassword}
                  value={formData.confirmPassword}
                  onChangeText={(text) =>
                    setFormData({ ...formData, confirmPassword: text })
                  }
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.showhideIcon}
                >
                  <Icon
                    name={showConfirmPassword ? "visibility" : "visibility-off"}
                    size={24}
                    color="#246BFD"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.termsContainer}>
                <View style={styles.termsRow}>
                  <Text style={styles.termsText}>
                    By registering, you agree to our
                  </Text>
                  <Text style={styles.highlightedText}>
                    Terms and Conditions
                  </Text>
                </View>
                <View style={styles.termsRow}>
                  <Text style={styles.termsText}>and</Text>
                  <Text style={styles.highlightedText}>Privacy Policy</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.backButtontwo}>
              <Icon name="arrow-back" size={24} color="#000" />
              <Text style={styles.backTextTwo}>Two step verification</Text>
            </TouchableOpacity>
            <Text style={styles.titleTwo}>
              Enter the code you received on your email
            </Text>
            <TextInput
              placeholder="1000"
              style={[
                styles.inputTwo,
                focusedInput === "verificationCode" && styles.inputFocused,
              ]}
              placeholderTextColor="#040C22"
              onFocus={() => setFocusedInput("verificationCode")}
              onBlur={() => setFocusedInput(null)}
              value={formData.verificationCode}
              onChangeText={(text) =>
                setFormData({ ...formData, verificationCode: text })
              }
            />
            <View>
             <Text style={styles.weneedText}>We need to verify that this is you. Open your email account</Text>       
                   <Text style={styles.weneedText}> and copy the four digit code we sent you</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={HandleHomePage}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.main}>{renderStep()}</View>;
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ffffff",
    paddingTop: 60,
    alignItems: "center",
  },
  container: {
    width: "100%",
    paddingHorizontal: 32,
  },
  RegisterContainer: {
    justifyContent: "center",
  },
  titlewelcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#240F51",
  },
  inputFocused: {
    borderColor: "#246BFD",
  },
  title: {
    fontSize: 13,
    fontWeight: "medium",
    marginBottom: 20,
  },
  titleTwo:{
    fontSize: 13,
    fontWeight: "medium",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#040C22",
    fontWeight: "bold",
    fontSize: 14,
  },
  inputTwo:{
    width: "100%",
    height: 100,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#040C22",
    fontWeight: "bold",
    fontSize: 34,
    textAlign:"center",
    
  },
  button: {
    backgroundColor: "#246BFD",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 100,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  logo: {
    width: 284,
    height: 64,
    objectFit: "contain",
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showhideIcon: {
    position: "absolute",
    right: 8,
    top: 15,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  registerTitle: {
    fontSize: 20,
    marginBottom: 40,
    fontWeight: "bold",
  },
  filldetails: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 40,
  },
  labelTitle: {
    color: "#8F94A3",
    fontWeight: "semibold",
    marginBottom: 10,
  },
  alreadyhave: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    color: "#246BFD",
    fontWeight: "bold",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
    width: "56%",
  },
  backButtontwo:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-around",
    width: "56%",
  },
  backText: {
    color: "#000",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
  backTextTwo:{
    color: "#000",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold" 
  },
  contentContainer: {
    marginTop: 50,
  },
  termsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  termsText: {
    color: "#7C7C7C",
    fontSize: 12,
    letterSpacing: 1,
  },
  highlightedText: {
    color: "#246BFD",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 1,
  },
  termsRow: {
    flexDirection: "row",
    textAlign: "center",
    gap: 4,
    marginBottom: 5,
  },

  weneedText:{
    fontSize:12,
    textAlign:"center",
    marginBottom:3
  }
});

export default Signup;


// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   Image,
// } from "react-native";
// import { useRouter } from "expo-router";
// import Icon from 'react-native-vector-icons/MaterialIcons'; 

// const { width } = Dimensions.get("window");

// const Signup = () => {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [focusedInput, setFocusedInput] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     email: "",
//     fullName: "",
//     phoneNumber: "",
//     idNumber: "",
//     bankAccount: "",
//     password: "",
//     confirmPassword: "",
//     verificationCode: "",
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleNext = () => {
//     if (step < 3) {
//       setStep(step + 1);
//     } else {
//       console.log("Final Data: ", formData);
//       // router.push("/Home"); 
//     }
//   };

//   const handleBack = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <View style={styles.container}>
//             <View style={styles.logoContainer}>
//               <Image
//                 source={require("@/assets/images/UniCashLogo1.png")}
//                 style={styles.logo}
//               />
//             </View>
//             <View style={styles.RegisterContainer}>
//               <Text style={styles.registerTitle}>Register</Text>
//               <Text style={styles.titlewelcome}>Welcome to Unicash</Text>
//               <Text style={styles.filldetails}>
//                 Fill in your details to make an account
//               </Text>
//               <Text style={styles.labelTitle}>Email</Text>
//               <TextInput
//                 placeholder="Emmugishaprosper@gmail.com"
//                 value={formData.email}
//                 onChangeText={(text) => setFormData({ ...formData, email: text })}
//                 style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
//                 placeholderTextColor="#040C22"
//                 onFocus={() => setFocusedInput('email')}
//                 onBlur={() => setFocusedInput(null)}
//               />
//               <Text style={styles.labelTitle}>Full Names</Text>
//               <TextInput
//                 placeholder="MUGISHA Prosper"
//                 value={formData.fullName}
//                 onChangeText={(text) => setFormData({ ...formData, fullName: text })}
//                 style={[styles.input, focusedInput === 'fullName' && styles.inputFocused]}
//                 placeholderTextColor="#040C22"
//                 onFocus={() => setFocusedInput('fullName')}
//                 onBlur={() => setFocusedInput(null)}
//               />
//               <Text style={styles.labelTitle}>Phone Number</Text>
//               <TextInput
//                 placeholder="0783309919"
//                 style={[styles.input, focusedInput === 'phoneNumber' && styles.inputFocused]}
//                 placeholderTextColor="#040C22"
//                 onFocus={() => setFocusedInput('phoneNumber')}
//                 onBlur={() => setFocusedInput(null)}
//                 value={formData.phoneNumber}
//                 onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
//               />
//               <View style={styles.alreadyhave}>
//                 <Text>
//                 Already have an account?
//                 </Text>
//                 <TouchableOpacity onPress={()=>{
//                   router.push("./Login")
//                 }}>
//                       <Text style={styles.login}>
//                         Login
//                       </Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity style={styles.button} onPress={handleNext}>
//                 <Text style={styles.buttonText}>Next</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 2:
//         return (
//           <View style={styles.container}>
//             <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//               <Icon name="arrow-back" size={24} color="#000" />
//               <Text style={styles.backText}>Register</Text>
//             </TouchableOpacity>
//             <View style={styles.contentContainer}>
//             <Text style={styles.title}>We need more of your information</Text>
//             <TextInput
//               placeholder="ID Number"
//               style={[styles.input, focusedInput === 'idNumber' && styles.inputFocused]}
//               placeholderTextColor="#040C22"
//               onFocus={() => setFocusedInput('idNumber')}
//               onBlur={() => setFocusedInput(null)}
//               value={formData.idNumber}
//               onChangeText={(text) => setFormData({ ...formData, idNumber: text })}
//             />
//             <TextInput
//               placeholder="Bursary Bank Account"
//               style={[styles.input, focusedInput === 'bankAccount' && styles.inputFocused]}
//               placeholderTextColor="#040C22"
//               onFocus={() => setFocusedInput('bankAccount')}
//               onBlur={() => setFocusedInput(null)}
//               value={formData.bankAccount}
//               onChangeText={(text) => setFormData({ ...formData, bankAccount: text })}
//             />
//             <View style={styles.passwordContainer}>
//               <TextInput
//                 placeholder="Password"
//                 style={[styles.input, focusedInput === 'password' && styles.inputFocused]}
//                 placeholderTextColor="#040C22"
//                 onFocus={() => setFocusedInput('password')}
//                 onBlur={() => setFocusedInput(null)}
//                 secureTextEntry={!showPassword}
//                 value={formData.password}
//                 onChangeText={(text) => setFormData({ ...formData, password: text })}
//               />
//               <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showhideIcon}>
//                 <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#246BFD" />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.passwordContainer}>
//               <TextInput
//                 placeholder="Confirm Password"
//                 style={[styles.input, focusedInput === 'confirmPassword' && styles.inputFocused]}
//                 placeholderTextColor="#040C22"
//                 onFocus={() => setFocusedInput('confirmPassword')}
//                 onBlur={() => setFocusedInput(null)}
//                 secureTextEntry={!showConfirmPassword}
//                 value={formData.confirmPassword}
//                 onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
//               />
//               <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.showhideIcon}>
//                 <Icon name={showConfirmPassword ? "visibility" : "visibility-off"} size={24} color="#246BFD" />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.termsContainer}>
//               <View style={styles.termsRow}>
//               <Text style={styles.termsText}>
//                 By registering, you agree to our
//               </Text>
//               <Text style={styles.highlightedText}>Terms and Conditions</Text>
//               </View>
//               <View style={styles.termsRow}>

// <Text style={styles.termsText}>and</Text>
// <Text style={styles.highlightedText}>Privacy Policy</Text>
// </View>

//             </View>
//             <TouchableOpacity style={styles.button} onPress={handleNext}>
//               <Text style={styles.buttonText}>Register</Text>
//             </TouchableOpacity>
//             </View>

//           </View>
//         );
//       case 3:
//         return (
//           <View style={styles.container}>
//             <TouchableOpacity onPress={handleBack} style={styles.backButtonTwo}>
//               <Icon name="arrow-back" size={24} color="#000" />
//               <Text style={styles.backText}>Two step verification</Text>
//             </TouchableOpacity>
//             <Text style={styles.titleEnter}>Enter the code you received on your email</Text>
//             <TextInput
//               placeholder="1000"
//               style={[styles.inputverificationCode, focusedInput === 'verificationCode' && styles.inputFocused]}
//               placeholderTextColor="#040C22"
//               onFocus={() => setFocusedInput('verificationCode')}
//               onBlur={() => setFocusedInput(null)}
//               value={formData.verificationCode}
//               onChangeText={(text) => setFormData({ ...formData, verificationCode: text })}
//             />
//             <View>
//               <Text style={styles.weneedText}>We need to verify that this is you. Open your email account</Text>
//               <Text style={styles.weneedText}> and copy the four digit code we sent you</Text>
//             </View>
//             <TouchableOpacity style={styles.button} onPress={handleNext}>
//               <Text style={styles.buttonText}>Verify</Text>
//             </TouchableOpacity>
//           </View>
//         );
//       default:
//         return null;
//     }
//   };

//   return <View style={styles.main}>{renderStep()}</View>;
// };

// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: "#ffffff",
//     paddingTop: 60,
//     alignItems: "center",
//   },
//   container: {
//     width: "100%",
//     paddingHorizontal: 32,
//   },
//   RegisterContainer: {
//     justifyContent: "center",
//   },
//   titlewelcome: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#240F51",
//   },
//   inputFocused: {
//     borderColor: "#246BFD",
//   },
//   title: {
//     fontSize: 13,
//     fontWeight: "medium",
//     marginBottom: 20,
//   },
//   titleEnter:{
//     fontSize: 13,
//     fontWeight: "medium",
//     marginBottom: 20,
//     marginTop:40
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderColor: "#E0E0E0",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     color: "#040C22",
//     fontWeight: "bold",
//     fontSize: 14,
//     textAlign:"center",
//     marginTop:10
//   },
//   inputverificationCode:{
//     width: "100%",
//     height: 100,
//     borderColor: "#E0E0E0",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     color: "#040C22",
//     fontWeight: "bold",
//     fontSize: 34,
//     textAlign:"center",
//     marginTop:10 
//   },
//   button: {
//     backgroundColor: "#246BFD",
//     paddingVertical: 10,
//     width: "100%",
//     borderRadius: 100,
//     alignItems: "center",
//     marginTop:50
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//   },
//   logo: {
//     width: 284,
//     height: 64,
//     objectFit: "contain",
//   },
//   passwordContainer: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   showhideIcon: {
//     position: "absolute",
//     right: 8,
//     top: 15,
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginBottom: 40,
//   },
//   registerTitle: {
//     fontSize: 20,
//     marginBottom: 40,
//     fontWeight: "bold",
//   },
//   filldetails: {
//     fontSize: 12,
//     fontWeight: "bold",
//     marginBottom: 40,
//   },
//   labelTitle: {
//     color: "#8F94A3",
//     fontWeight: "semibold",
//     marginBottom: 10,
//   },
//   alreadyhave: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 10,
//     marginBottom: 15,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   login: {
//     color: "#246BFD",
//     fontWeight: "bold",
//   },
//   backButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     justifyContent:"space-between",
//     width:"56%"
//   },
//   backButtonTwo:{
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     justifyContent:"space-around",
//     width:"70%"
//   },
//   backText: {
//     color: "#000",
//     fontSize: 16,
//     marginLeft: 5,
//     fontWeight:"bold"
//   },
//   contentContainer:{
//     marginTop:50
//   },
//   termsContainer: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   termsText: {
//     color: "#7C7C7C",
//     fontSize: 12,
//     letterSpacing:1
//   },
//   highlightedText: {
//     color: "#246BFD",
//     fontWeight: "bold",
//     fontSize: 12,
//     letterSpacing:1

//   },
//   termsRow:{
//     flexDirection:"row",
//     textAlign:"center",
//     gap:4,
//     marginBottom:5
//   },
//             <View>
//               <Text style={styles.weneedText}>We need to verify that this is you. Open your email account</Text>
//               <Text style={styles.weneedText}> and copy the four digit code we sent you</Text>
//             </View>
//   weneedText:{
//     fontSize:12,
//     textAlign:"center",
//     marginBottom:3
//   }
// });

// export default Signup;
