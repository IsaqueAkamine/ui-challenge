import React from "react";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  ActionButtonsContainer,
  ButtonsContainer,
  Container,
  ForgotPasswordButton,
  ForgotPasswordContainer,
  ForgotPasswordText,
  Image,
  Title,
} from "./welcome-style";
import RegistrationButton from "../../components/RegistrationButton";

export default function Welcome() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleNavigate(route: string) {
    navigation.navigate(route);
  }

  return (
    <Container>
      <Title>You are not alone </Title>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={{
          width,
          resizeMode: "cover",
        }}
      />
      <ActionButtonsContainer>
        <ButtonsContainer>
          <RegistrationButton description="Sign up" dark />
          <RegistrationButton
            description="Login"
            onPress={() => {
              handleNavigate("Login");
            }}
          />
        </ButtonsContainer>
        <ForgotPasswordContainer>
          <ForgotPasswordButton
            activeOpacity={0.7}
            onPress={() => {
              handleNavigate("Home");
            }}
          >
            <ForgotPasswordText>Forgot password?</ForgotPasswordText>
          </ForgotPasswordButton>
        </ForgotPasswordContainer>
      </ActionButtonsContainer>
    </Container>
  );
}
