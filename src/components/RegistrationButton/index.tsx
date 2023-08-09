import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Description, Load } from "./registration.style";

interface RegistrationButtonProps extends TouchableOpacityProps {
  description: string;
  dark?: boolean;
  isLoading?: boolean;
}

export default function RegistrationButton({
  dark,
  description,
  isLoading,
  ...rest
}: RegistrationButtonProps) {
  return (
    <Container dark={dark} activeOpacity={0.7} {...rest}>
      {isLoading ? (
        <Load color={dark ? "#fff" : "#000"} />
      ) : (
        <Description dark={dark}>{description}</Description>
      )}
    </Container>
  );
}
