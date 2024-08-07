import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import Swiper from "react-native-swiper";
import { Link, useRouter } from "expo-router";
const { width } = Dimensions.get("window");

const OnBoarding = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).scrollBy(1);
    }
  };
  const navigateToSignup = () => {
    router.push("./SignupLogin/Signup");
  };
  const renderContent = () => (
    <View style={styles.main}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        onIndexChanged={setIndex}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}
      >
        <View style={styles.slide}>
          <Image
            source={require("@/assets/images/UniCashLogo1.png")}
            style={styles.logo}
          />
          <Image
            source={require("@/assets/images/onboarding/onboard1.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Get cash to sort your problems easily</Text>
        </View>
        <View style={styles.slide}>
          <Image
            source={require("@/assets/images/UniCashLogo1.png")}
            style={styles.logo}
          />
          <Image
            source={require("@/assets/images/onboarding/onboard2.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Don’t worry about paying, it’s automatic
          </Text>
        </View>
        <View style={styles.slide}>
          <Image
            source={require("@/assets/images/UniCashLogo1.png")}
            style={styles.logo}
          />
          <Image
            source={require("@/assets/images/onboarding/onboard3.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Receive loan instantly by a click of a button
          </Text>
        </View>
      </Swiper>
      <View style={styles.footer}>
        {index < 2 && (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
        {index >= 2 && (
          <TouchableOpacity
            style={[styles.button, { padding: 0, paddingVertical: 0 }]}
          >
            <Pressable style={[styles.button]} onPress={navigateToSignup}>
              <Text style={styles.getStarted}>Done</Text>
            </Pressable>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  footer: {
    paddingVertical: 20,
    position: "absolute",
    bottom: 10,
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    width: 284,
    height: 64,
    objectFit: "contain",
  },
  image: {
    width: 182,
    height: 269,
    marginBottom: 40,
    marginTop: 90,
    objectFit: "contain",
  },
  text: {
    fontSize: 34,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    width: "85%",
  },
  button: {
    backgroundColor: "#246BFD",
    width: width - 60,
    display: "flex",
    alignItems: "center",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    overflow: "hidden",
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 19,
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "rgba(200, 200, 200, 0.9)",
    width: 30,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 70,
  },
  activeDot: {
    backgroundColor: "#246BFD",
    width: 15,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    marginBottom: 70,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  getStarted: {
    color: "white",
    fontWeight: "bold",
  },
});

export default OnBoarding;
