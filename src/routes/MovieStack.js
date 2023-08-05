import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MovieDetails } from "../screens";
import { MovieTab } from "./MovieTab";

export default function MovieStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MovieTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MovieTab" component={MovieTab} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}
