import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Movies } from "../screens";

export function MovieTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Movies" component={Movies} />
    </Tab.Navigator>
  );
}
