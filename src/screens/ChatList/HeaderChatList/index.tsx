import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Button, Container, Input } from "./styles";
import { TextInputProps } from "react-native";

interface HeaderProps {
  input: TextInputProps;
  onSearch: () => void;
}

const HeaderChatList: React.FC<HeaderProps> = ({ input, onSearch }) => {
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }

  return (
    <Container>
      <Button onPress={handleBackNavigation}>
        <Feather name="arrow-left" size={24} color="#000" />
      </Button>
      <Input
        placeholder="Find user..."
        onChangeText={input.onChangeText}
        value={input.value}
      />
      <Button onPress={onSearch}>
        <Feather name="search" size={24} color="#000" />
      </Button>
    </Container>
  );
};

export default HeaderChatList;
