import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/auth";

import {
  HomeScreen,
  ProfileScreen,
  Responsivity,
  GitHubUserScreen,
  Message,
} from "../screens";
import { JobStack } from "./JobStack";
import MovieStack from "./MovieStack";
import ChatStack from "./ChatStack";
import { getBottomSpace } from "react-native-iphone-x-helper";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  const { t } = useTranslation();
  const { logOut } = useAuth();

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingBottom: getBottomSpace(),
          }}
        >
          <View style={{ flex: 1 }}>
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
          </View>

          <DrawerItem
            style={{
              borderTopColor: "#f4f4f4",
              borderTopWidth: 1,
            }}
            icon={({ color, size }) => (
              <FontAwesome name={"sign-out"} size={size} color={color} />
            )}
            label={t("home.logout")}
            onPress={() => logOut()}
          />
        </View>
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
      drawerContent={(props) => {
        return <CustomDrawerContent {...props} />;
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
          drawerLabel: t("home.profile"),
          title: t("home.profile"),
          drawerIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
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
      /> */}
      <Drawer.Screen
        name="UserData"
        component={GitHubUserScreen}
        options={{
          headerShown: false,
          drawerLabel: t("home.github-user"),
          title: t("home.github-user"),
          drawerIcon: ({ size, color }) => (
            <Feather name="github" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SearchResults"
        component={JobStack}
        options={{
          headerShown: false,
          drawerLabel: t("home.find-job"),
          title: t("home.find-job"),
          drawerIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MovieStack"
        component={MovieStack}
        options={{
          headerShown: false,
          drawerLabel: t("home.movies"),
          title: t("home.movies"),
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatStack}
        options={{
          headerShown: false,
          drawerLabel: t("home.chat"),
          title: t("home.chat"),
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="message" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
