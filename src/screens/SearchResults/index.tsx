import React from "react";
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

import {
  Container,
  Description,
  StartButtonContainer,
  StartButtonIcon,
  StartButtonText,
  Title,
} from "./search-results.styles";

function SearchResults() {
  const { t } = useTranslation();
  return (
    <LinearGradient
      colors={["#2B85D8", "#EDB3D7"]}
      locations={[0.5, 0.8]}
      end={{ x: 0.9, y: 0.5 }}
      style={{ flex: 1, translateY: 90 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Title>{t("search-results.title")}</Title>
          <Description>{t("search-results.description")}</Description>

          <StartButtonContainer>
            <StartButtonText>
              {t("search-results.start-button")}
            </StartButtonText>
            {/* <Feather name="arrow-right" size={24} color={} /> */}
            <StartButtonIcon name="arrow-right" size={24} />
          </StartButtonContainer>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default SearchResults;
