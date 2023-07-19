import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerMenu from "./Drawer";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Drawer"
        component={DrawerMenu}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
