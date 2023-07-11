import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/Profile";
import Responsivity from "../screens/Responsivity";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icons/drawer-icon.png")}
                style={{
                  width: 260,
                  height: 195,
                  borderRadius: 4,
                  resizeMode: "contain",
                }}
              />
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          drawerLabel: t("routes.Home"),
          title: t("routes.Home"),
          drawerIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Responsivity"
        component={Responsivity}
        options={{
          headerShown: false,
          drawerLabel: "Responsivity",
          title: "Responsivity",
          drawerIcon: ({ size, color }) => (
            <Feather name="layout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
