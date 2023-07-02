import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import OnboardingScreen1 from "./src/screens/Onboarding/FirstScreen";
import OnboardingScreen2 from "./src/screens/Onboarding/SecondScreen";
import Onboarding from "./src/components/Onboarding";

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <OnboardingScreen1 /> */}
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
