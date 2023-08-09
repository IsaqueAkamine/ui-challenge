import React from "react";
import { TextInputProps } from "react-native";
import { Container, Description, InputStyled } from "./input.style";
import { COLORS } from "../../constants/colors";

interface InputProps extends TextInputProps {
  description: string;
}

export default function Input({ description, ...rest }: InputProps) {
  return (
    <Container>
      <Description>{description}</Description>
      <InputStyled
        {...rest}
        placeholderTextColor={COLORS.loginInput}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </Container>
  );
}
