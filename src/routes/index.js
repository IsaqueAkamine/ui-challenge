import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "../contexts/auth";

import { useFonts } from "expo-font";
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
import AuthRoutes from "./AuthRoutes";
import AppStack from "./AppStack";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default function Routes() {
  const { viewedOnboarding, hideOnboarding, user, loading, setLoadingAppData } =
    useAuth();

  const [fontsLoaded] = useFonts({
    "Karma-Bold": require("../assets/fonts/Karma-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  let [fontsLoadedQuicksand] = useQuickSand({
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
      setLoadingAppData(false);
    }
  };

  useEffect(() => {
    checkOnBoarding();
  }, []);

  if (!fontsLoadedQuicksand || !fontsLoadedSahitya || loading) {
    return <Loading />;
  }

  if (!viewedOnboarding) {
    return <Onboarding />;
  }

  return user ? <AppStack /> : <AuthRoutes />;
}
