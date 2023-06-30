// export default function App() {
//   return (
//     <OnboardingScreen1 />
//   );
// }

// import { useCallback } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { useFonts, Inter_900Black } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// // import OnboardingScreen1 from "./src/screens/Onboarding/FirstScreen";

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
//       <Text style={{ fontSize: 30 }}>Platform Default</Text>
//       {/* <OnboardingScreen1 /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import OnboardingScreen1 from "./src/screens/Onboarding/FirstScreen";
import OnboardingScreen2 from "./src/screens/Onboarding/SecondScreen";

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
      {/* <Text style={{ fontFamily: 'Quicksand_700Bold', fontSize: 40 }}>Inter Black</Text> */}
      <OnboardingScreen1 />
      {/* <OnboardingScreen2 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
