import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";

import "./src/utils/translations/i18n";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/auth";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
