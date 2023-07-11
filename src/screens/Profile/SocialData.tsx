import React from "react";
import { Container, Description, Title } from "./social.styles";

interface SocialDataProps {
  title: string;
  value: number;
}

export default function SocialData({ title, value }: SocialDataProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{value}</Description>
    </Container>
  );
}
