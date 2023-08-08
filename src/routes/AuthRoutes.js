import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Example, Login, SignUp, Welcome } from "../screens";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Example"
        component={Example}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
