import { StatusBar } from "react-native";
import Header from "../../components/Header";
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
import Input from "../../components/Input";
import RegistrationButton from "../../components/RegistrationButton";

export default function Login() {
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
          }}
        />
        <Input
          description="Your Password"
          inputProps={{ placeholder: "**********", secureTextEntry: true }}
        />
      </Form>
      <Footer>
        <RegistrationButton description="Login" />
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
