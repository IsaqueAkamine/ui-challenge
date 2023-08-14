import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatList, Message } from "../screens";

export default function ChatStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}
