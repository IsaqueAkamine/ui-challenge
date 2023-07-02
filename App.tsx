import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
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

  if (!fontsLoaded || loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {viewedOnboarding ? <HomeScreen /> : <Onboarding />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
