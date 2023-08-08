import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../contexts/auth";
import Header from "../../components/Header";
import Input from "../../components/Input";
import RegistrationButton from "../../components/RegistrationButton";
import {
  Container,
  Description,
  Footer,
  Form,
  HaveAccountButton,
  HaveAccountContainer,
  HaveAccountSignUp,
  HaveAccountText,
  SafeArea,
  Title,
} from "./login.style";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const { signIn } = useAuth();
  // const [email, setEmail]
  let email = "";
  let password = "";

  function handleEmail(value: string) {
    email = value;
  }
  function handlePassword(value: string) {
    password = value;
  }

  function handleLogin() {
    signIn(email, password);
  }

  function handleNavigate(route: string) {
    navigation.navigate(route);
  }

  return (
    <SafeArea>
      <Container>
        <StatusBar barStyle={"light-content"} />
        <Header />
        <Title>{t("authentication.login.title")}</Title>
        <Description>{t("authentication.login.description1")}</Description>
        <Description>{t("authentication.login.description2")}</Description>
        <Form>
          <Input
            description="Your Email"
            inputProps={{
              placeholder: "name@email.com",
              keyboardType: "email-address",
              onChangeText: (text) => {
                handleEmail(text);
              },
            }}
          />
          <Input
            description="Your Password"
            inputProps={{
              placeholder: "**********",
              secureTextEntry: true,
              onChangeText: (text) => {
                handlePassword(text);
              },
            }}
          />
        </Form>
        <Footer>
          <RegistrationButton onPress={handleLogin} description="Login" />
          <HaveAccountContainer>
            <HaveAccountText>{t("authentication.login.have-account")}</HaveAccountText>
            <HaveAccountButton onPress={() => handleNavigate("SignUp")}>
              <HaveAccountSignUp>{t("authentication.login.sign-up")}</HaveAccountSignUp>
            </HaveAccountButton>
          </HaveAccountContainer>
        </Footer>
      </Container>
    </SafeArea>
  );
}
