import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Description, FlagImage, LanguageButton } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SELECTED_LANGUAGE_KEY } from "../../constants/storage";

const LanguageSelector: React.FC = () => {
  const flagBR = require("../../assets/icons/flag-br.png");
  const flagUs = require("../../assets/icons/flag-us.png");

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(async () => {
        setCurrentLanguage(value);
        await AsyncStorage.setItem(SELECTED_LANGUAGE_KEY, value);
      })
      .catch((error) => {
        console.log("Error @changeLanguage", error);
      });
  };

  async function loadSelectedLanguage() {
    const language = await AsyncStorage.getItem(SELECTED_LANGUAGE_KEY);
    if (language) {
      changeLanguage(language);
      setCurrentLanguage(language);
    }
  }

  useEffect(() => {
    loadSelectedLanguage();
  }, []);

  return (
    <Container>
      <LanguageButton
        onPress={() => changeLanguage("en")}
        selected={currentLanguage === "en"}
      >
        <FlagImage source={flagUs} resizeMode="stretch" />
        <Description>English</Description>
      </LanguageButton>

      <LanguageButton
        onPress={() => changeLanguage("ptBR")}
        selected={currentLanguage === "ptBR"}
      >
        <FlagImage source={flagBR} resizeMode="stretch" />
        <Description>Português</Description>
      </LanguageButton>
    </Container>
  );
};

export default LanguageSelector;
