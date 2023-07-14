import React from "react";
import { Container, Description, Title } from "./user.styles";

interface UserDataProps {
  title: string;
  value: number;
}

export default function UserData({ title, value }: UserDataProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{value}</Description>
    </Container>
  );
}
