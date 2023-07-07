import React from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Container, Title } from "./home-style";
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
      <Title>Home screen </Title>
      <TouchableOpacity onPress={clearOnboarding}>
        <Title>Clear async storage</Title>
      </TouchableOpacity>
    </Container>
  );
}
