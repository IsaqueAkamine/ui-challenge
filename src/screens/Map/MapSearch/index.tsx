import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Button,
  ButtonText,
  Container,
  Image,
  Reactangle,
  Title,
} from "./map-search.style";

function MapSearch() {
  const navigation = useNavigation();
  const image = require("../../../assets/images/Map/party-map.png");

  function handleNavigateToMap() {
    navigation.navigate("Map");
  }

  return (
    <Container>
      <Title>{`Search\nDiscover\nParties`}</Title>
      <Reactangle />
      <Image source={image} style={{ resizeMode: "contain" }} />

      <Button onPress={handleNavigateToMap}>
        <ButtonText>Start</ButtonText>
      </Button>
    </Container>
  );
}

export default MapSearch;
