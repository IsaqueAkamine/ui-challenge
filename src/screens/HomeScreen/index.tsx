import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import {
  ButtonLanguage,
  ButtonLanguageContainer,
  ButtonLanguageText,
  CardContainer,
  CardDescription,
  CardImage,
  Container,
  WelcomeContainer,
  WelcomeText,
} from "./style";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ScreenProps {
  id: number;
  description: string;
  icon: string;
  path: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
      })
      .catch((error) => {
        console.log("Error @changeLanguage", error);
      });
  };

  const list = [
    { id: 1, description: "Profile", icon: "user", path: "Profile" },
    { id: 2, description: "Github User", icon: "github", path: "UserData" },
    { id: 3, description: "Find a job", icon: "search", path: "SearchResults" },
    { id: 4, description: "Movies", icon: "local-movies", path: "MovieStack" },
    { id: 5, description: "Chats", icon: "message", path: "Chat" },
  ];

  const movieImage = require("../../assets/images/movie-img-cover.jpeg");

  function handleNavigate(path: string) {
    navigation.navigate(path);
  }

  function renderCard(item: ScreenProps) {
    return (
      <CardContainer onPress={() => handleNavigate(item.path)}>
        {/* <CardImage source={movieImage} /> */}
        {item.id > 3 ? (
          <MaterialIcons name={item.icon} size={80} color="#ddd" />
        ) : (
          <Feather name={item.icon} size={80} color="#ddd" />
        )}
        <CardDescription>{item.description}</CardDescription>
      </CardContainer>
    );
  }

  return (
    <Container>
      <WelcomeContainer>
        <WelcomeText>{t("home.Welcome")}</WelcomeText>
        <WelcomeText>{t("home.to UI Challenge app")}</WelcomeText>
      </WelcomeContainer>

      <ButtonLanguageContainer>
        <ButtonLanguage
          onPress={() => changeLanguage("en")}
          selected={currentLanguage === "en"}
        >
          <ButtonLanguageText>English</ButtonLanguageText>
        </ButtonLanguage>
        <ButtonLanguage
          onPress={() => changeLanguage("ptBR")}
          selected={currentLanguage === "ptBR"}
        >
          <ButtonLanguageText>Português Brasil</ButtonLanguageText>
        </ButtonLanguage>
      </ButtonLanguageContainer>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        numColumns={2}
        columnWrapperStyle={{ gap: 5, justifyContent: "space-around" }}
        renderItem={({ item }) => renderCard(item)}
        style={{ marginTop: 20 }}
        contentContainerStyle={{ gap: 5 }}
      />
    </Container>
  );
}
