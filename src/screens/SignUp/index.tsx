import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

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

export default function SignUp(): React.ReactNode {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleNewAccount() {
    setIsLoading(true);
    let error = "";

    if (email.trim().length < 3) error = "Invalid email";
    else if (password.trim().length < 3) error = "Invalid password";

    if (error.length > 0) {
      setIsLoading(false);
      return Alert.alert("Error", error);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        Alert.alert("Account", "Account successfully created!");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => setIsLoading(false));
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
            description="Your Email"
            placeholder="name@email.com"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <Input
            description="Your Password"
            placeholder="**********"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </Form>
        <Footer>
          <RegistrationButton
            isLoading={isLoading}
            disabled={isLoading}
            onPress={handleNewAccount}
            description="Create account"
          />
          <HaveAccountContainer>
            <HaveAccountText>
              {t("authentication.signup.have-account")}
            </HaveAccountText>
            <HaveAccountButton onPress={() => handleNavigate("Login")}>
              <HaveAccountSignUp>Login</HaveAccountSignUp>
            </HaveAccountButton>
          </HaveAccountContainer>
        </Footer>
      </Container>
    </SafeArea>
  );
}
