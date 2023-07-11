import React from "react";
import {
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  ActionButtonsContainer,
  ButtonsContainer,
  Container,
  ForgotPasswordButton,
  ForgotPasswordContainer,
  ForgotPasswordText,
  Image,
  Title,
} from "./responsivity.styles";
import RegistrationButton from "../../components/RegistrationButton";
import Input from "../../components/Input";

export default function Responsivity() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleNavigate(route: string) {
    navigation.navigate(route);
  }

  return (
    <Container>
      <Title>You are not alone </Title>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(10),
          zIndex: -5,
        }}
      >
        <Image
          source={require("../../assets/images/welcome.png")}
          style={{
            width,
            height: RFPercentage(85),
            resizeMode: "contain",
          }}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ paddingHorizontal: 32 }}
      >
        <Input
          description="Your Email"
          inputProps={{
            placeholder: "name@email.com",
            keyboardType: "email-address",
          }}
        />
      </KeyboardAvoidingView>

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
          <ForgotPasswordButton activeOpacity={0.7}>
            <ForgotPasswordText>Forgot password?</ForgotPasswordText>
          </ForgotPasswordButton>
        </ForgotPasswordContainer>
      </ActionButtonsContainer>
    </Container>
  );
}
