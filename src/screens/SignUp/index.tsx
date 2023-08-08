import React from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
} from "./styles";
import { useTranslation } from "react-i18next";

export default function SignUp(): React.ReactNode {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  let username = "";
  let email = "";
  let password = "";

  function handleUsername(value: string) {
    username = value;
  }

  function handleEmail(value: string) {
    email = value;
  }

  function handlePassword(value: string) {
    password = value;
  }

  function createAccount() {
    let error = "";
    if (username.trim().length < 3) error = "Invalid user";
    else if (email.trim().length < 3) error = "Invalid email";
    else if (password.trim().length < 3) error = "Invalid password";

    if (error.length > 0) {
      return Alert.alert("Error", error);
    }

    console.log("CREATE ACCOUNT");
  }

  function handleNavigate(route: string) {
    navigation.navigate(route);
  }

  return (
    <SafeArea>
      <Container>
        <StatusBar barStyle={"light-content"} />
        <Header />
        <Title>{t("authentication.signup.title")}</Title>
        <Description>{t("authentication.signup.description1")}</Description>
        <Description>{t("authentication.signup.description2")}</Description>
        <Form>
          <Input
            description="Username"
            inputProps={{
              placeholder: "username",
              onChangeText: (text) => {
                handleUsername(text);
              },
            }}
          />
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
          <RegistrationButton
            onPress={createAccount}
            description="Create account"
          />
          <HaveAccountContainer>
            <HaveAccountText>{t("authentication.signup.have-account")}</HaveAccountText>
            <HaveAccountButton onPress={() => handleNavigate("Login")}>
              <HaveAccountSignUp>Login</HaveAccountSignUp>
            </HaveAccountButton>
          </HaveAccountContainer>
        </Footer>
      </Container>
    </SafeArea>
  );
}
