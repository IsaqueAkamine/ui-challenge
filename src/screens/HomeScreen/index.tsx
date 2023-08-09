import React, { useState } from "react";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import { removeLoggedUser } from "../../storages/AuthStorage";

import {
  ButtonLanguage,
  ButtonLanguageContainer,
  ButtonLanguageText,
  ClearButton,
  ClearButtonText,
  Container,
  ImageContainer,
  WelcomeContainer,
  WelcomeText,
} from "./home.style";
import { useAuth } from "../../contexts/auth";

export default function HomeScreen() {
  const { logOut } = useAuth();
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

  return (
    <Container>
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

      <ImageContainer>
        <Image
          source={require("../../assets/icons/drawer-icon.png")}
          style={{
            width: 260,
            height: 195,
            borderRadius: 4,
            resizeMode: "contain",
          }}
        />
      </ImageContainer>

      <WelcomeContainer>
        <WelcomeText>{t("home.Welcome")}</WelcomeText>
        <WelcomeText>{t("home.to UI Challenge app")}</WelcomeText>
      </WelcomeContainer>

      <ClearButton onPress={() => logOut()}>
        <ClearButtonText>{t("home.Log Out")}</ClearButtonText>
      </ClearButton>
    </Container>
  );
}
