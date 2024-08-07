import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";
// import { store } from "../redux/store/store";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    UrbanistBold: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
  
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(home)" />

        {/* <Stack.Screen name="counter/Counter" />
        <Stack.Screen name="Userprofile/userprofile"  options={{ headerShown: false }} />
        <Stack.Screen name="Userprofile/createpin"  options={{ headerShown: false }} />
        <Stack.Screen name="Userprofile/setfingerprint" options={{headerShown:false}}/> */}
      </Stack>
 
  );
}