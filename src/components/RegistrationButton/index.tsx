import React from "react";
import { Container, Description } from "./registration-style";

interface RegistrationButtonProps {
  description: string;
  dark?: boolean;
}

export default function RegistrationButton(props: RegistrationButtonProps) {
  return (
    <Container dark={props.dark} activeOpacity={0.7}>
      <Description dark={props.dark}>{props.description}</Description>
    </Container>
  );
}
