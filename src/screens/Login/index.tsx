import React from "react";
import { StatusBar } from "react-native";
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
  Title,
} from "./login-style";

export default function Login() {
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
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <Header />
      <Title>Let’s sign you in.</Title>
      <Description>Welcome back</Description>
      <Description>You’ve been missed!</Description>
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
          <HaveAccountText>Do you have an account?</HaveAccountText>
          <HaveAccountButton>
            <HaveAccountSignUp>Sign up</HaveAccountSignUp>
          </HaveAccountButton>
        </HaveAccountContainer>
      </Footer>
    </Container>
  );
}
