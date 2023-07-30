import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Map, MapSearch } from "../screens";

export default function MapStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MapSearch"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MapSearch" component={MapSearch} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}
