import React from "react";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ClearButton, ClearButtonText, Container } from "./home-style";
import { removeLoggedUser } from "../../storages/AuthStorage";

export default function HomeScreen() {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
      await removeLoggedUser();
    } catch (error) {
      console.log("Error @clearItem", error);
    }
  };
  return (
    <Container>
      <Image
        source={require("../../assets/icons/drawer-icon.png")}
        style={{
          width: 260,
          height: 195,
          borderRadius: 4,
          resizeMode: "contain",
        }}
      />
      <ClearButton onPress={clearOnboarding}>
        <ClearButtonText>Log Out</ClearButtonText>
      </ClearButton>
    </Container>
  );
}
