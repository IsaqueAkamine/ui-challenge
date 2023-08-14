import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Button, Container, Input, Title } from "./styles";

const HeaderChatList: React.FC = () => {
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }

  function handleSearch() {}

  return (
    <Container>
      <Button onPress={handleBackNavigation}>
        <Feather name="arrow-left" size={24} color="#000" />
      </Button>
      {/* <Title>Header</Title> */}
      <Input placeholder="Find user..."/>
      <Button onPress={handleBackNavigation}>
        <Feather name="search" size={24} color="#000" />
      </Button>
    </Container>
  );
};

export default HeaderChatList;
