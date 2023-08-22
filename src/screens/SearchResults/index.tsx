import React from "react";
import { SafeAreaView, Image, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const ImgRocket = require("../../assets/images/SearchResults/Rocket.png");
  const ImgOrb = require("../../assets/images/SearchResults/Orb.png");
  const navigation = useNavigation();

  function handleNavigateToJobs() {
    navigation.navigate("Jobs");
  }

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

          <StartButtonContainer onPress={handleNavigateToJobs}>
            <StartButtonText>
              {t("search-results.start-button")}
            </StartButtonText>
            <StartButtonIcon name="arrow-right" size={24} />
          </StartButtonContainer>
        </Container>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ImageBackground
            source={ImgOrb}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            resizeMode="contain"
          >
            <Image
              source={ImgRocket}
              resizeMode="cover"
              style={{
                flex: 1,
                width: "100%",
                marginTop: -70,
              }}
            />
          </ImageBackground>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default SearchResults;
