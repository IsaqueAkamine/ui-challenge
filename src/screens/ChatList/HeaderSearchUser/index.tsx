import React from "react";
import { TextInputProps, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { Button, Container, Input } from "./styles";

interface HeaderProps {
  input: TextInputProps;
  onSearch: () => void;
  onClear: () => void;
}

const HeaderSearchUser: React.FC<HeaderProps> = ({
  input,
  onSearch,
  onClear,
}) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }

  return (
    <Container>
      <Button onPress={handleBackNavigation}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </Button>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Input
          placeholderTextColor={"#FFF"}
          placeholder={t("chats.search")}
          onChangeText={input.onChangeText}
          value={input.value}
        />

        {input.value.length > 0 && (
          <Button
            onPress={onClear}
            style={{
              position: "absolute",
              right: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="clear" size={20} color="#fff" />
          </Button>
        )}
      </View>
      <Button onPress={onSearch}>
        <Feather name="search" size={24} color="#fff" />
      </Button>
    </Container>
  );
};

export default HeaderSearchUser;
