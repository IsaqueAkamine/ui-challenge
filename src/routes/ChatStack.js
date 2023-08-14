import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatList, Message } from "../screens";
import { ChatContextProvider } from "../contexts/ChatContext";

export default function ChatStack() {
  const Stack = createNativeStackNavigator();
  return (
    <ChatContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </ChatContextProvider>
  );
}
