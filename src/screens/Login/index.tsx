import { StatusBar } from "react-native";
import Header from "../../components/Header";
import { Container, Description, Form, Title } from "./login-style";
import Input from "../../components/Input";

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
          inputProps={{ placeholder: "name@email.com" }}
        />
        <Input
          description="Your Password"
          inputProps={{ placeholder: "**********" }}
        />
      </Form>
    </Container>
  );
}
