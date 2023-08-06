import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Movies } from "../screens";
import { Text, View } from "react-native";

export function MovieTab() {
  const Tab = createBottomTabNavigator();

  const Example = () => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Example Screen</Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 72,
          bottom: getBottomSpace(),
          borderRadius: 90,
          marginHorizontal: 28,
          paddingBottom: -getBottomSpace(),
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Example}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="heart-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Example}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="bell-o" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Example}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
