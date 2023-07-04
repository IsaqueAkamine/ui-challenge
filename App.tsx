import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts as useQuickSand,
  Quicksand_400Regular,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
  useFonts as useSahitya,
  Sahitya_400Regular,
  Sahitya_700Bold,
} from "@expo-google-fonts/sahitya";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Routes from "./src/routes";
import Onboarding from "./src/components/Onboarding";
import HomeScreen from "./src/screens/HomeScreen";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  let [fontsLoaded] = useQuickSand({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  let [fontsLoadedSahitya] = useSahitya({
    Sahitya_400Regular,
    Sahitya_700Bold,
  });
  
  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error @checkOnboarding", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnBoarding();
  }, []);

  if ((!fontsLoaded || !fontsLoadedSahitya) || loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {viewedOnboarding ? <Routes /> : <Onboarding />}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
