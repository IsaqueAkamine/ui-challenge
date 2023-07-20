import React from "react";
import { Container, Description, InputStyled } from "./input.style";
import { TextInputProps } from "react-native";
import { COLORS } from "../../constants/colors";

interface InputProps {
  description: string;
  inputProps: TextInputProps;
}

export default function Input({ description, inputProps }: InputProps) {
  return (
    <Container>
      <Description>{description}</Description>
      <InputStyled {...inputProps} placeholderTextColor={COLORS.loginInput} />
    </Container>
  );
}
