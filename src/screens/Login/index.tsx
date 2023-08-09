import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

import { useAuth } from "../../contexts/auth";
import Header from "../../components/Header";
import Input from "../../components/Input";
import RegistrationButton from "../../components/RegistrationButton";
import {
  Container,
  Description,
  Footer,
  ForgotPasswordButton,
  ForgotPasswordContainer,
  ForgotPasswordText,
  Form,
  HaveAccountButton,
  HaveAccountContainer,
  HaveAccountSignUp,
  HaveAccountText,
  SafeArea,
  Title,
} from "./login.style";

export default function Login() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setIsLoading(true);
    // signIn(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // // Signed in
        // const user = userCredential.user;
        // // ...
        console.log("Logged in");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleForgotPassword() {
    setIsLoading(true);
    let error = "";

    if (email.trim().length < 3) error = "Invalid email";

    if (error.length > 0) {
      setIsLoading(false);
      return Alert.alert("Error", error);
    }

    sendPasswordResetEmail(auth, email)
      .then(() => Alert.alert("Forgot password", "An email has been sent"))
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
        <Title>{t("authentication.login.title")}</Title>
        <Description>{t("authentication.login.description1")}</Description>
        <Description>{t("authentication.login.description2")}</Description>
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
          <ForgotPasswordContainer>
            <ForgotPasswordButton onPress={handleForgotPassword}>
              <ForgotPasswordText>
                {t("authentication.login.forgot-password")}
              </ForgotPasswordText>
            </ForgotPasswordButton>
          </ForgotPasswordContainer>
        </Form>
        <Footer>
          <RegistrationButton
            isLoading={isLoading}
            disabled={isLoading}
            onPress={handleLogin}
            description="Login"
          />
          <HaveAccountContainer>
            <HaveAccountText>
              {t("authentication.login.have-account")}
            </HaveAccountText>
            <HaveAccountButton onPress={() => handleNavigate("SignUp")}>
              <HaveAccountSignUp>
                {t("authentication.login.sign-up")}
              </HaveAccountSignUp>
            </HaveAccountButton>
          </HaveAccountContainer>
        </Footer>
      </Container>
    </SafeArea>
  );
}
