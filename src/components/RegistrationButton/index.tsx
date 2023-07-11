import React from "react";
import { Container, Description } from "./registration.style";

interface RegistrationButtonProps {
  description: string;
  dark?: boolean;
  onPress?: () => void;
}

export default function RegistrationButton(props: RegistrationButtonProps) {
  return (
    <Container dark={props.dark} activeOpacity={0.7} onPress={props.onPress}>
      <Description dark={props.dark}>{props.description}</Description>
    </Container>
  );
}
