import React, { useState, useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../contexts/auth";
import AuthRoutes from "./AuthRoutes";

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

import Onboarding from "../components/Onboarding";

const Stack = createNativeStackNavigator();

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default function Routes() {
  const [loading, setLoading] = useState(true);
  const { viewedOnboarding, hideOnboarding } = useContext(AuthContext);

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
        hideOnboarding();
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

  if (!fontsLoaded || !fontsLoadedSahitya || loading) {
    return <Loading />;
  }

  if (!viewedOnboarding) {
    return <Onboarding />;
  }

  return <AuthRoutes />;
}
