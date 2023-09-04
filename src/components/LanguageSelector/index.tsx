import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Description, FlagImage, LanguageButton } from "./styles";

const LanguageSelector: React.FC = () => {
  const flagBR = require("../../assets/icons/flag-br.png");
  const flagUs = require("../../assets/icons/flag-us.png");

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
        <Description>Portugues</Description>
      </LanguageButton>
    </Container>
  );
};

export default LanguageSelector;
