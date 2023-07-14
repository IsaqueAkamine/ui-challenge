import React from "react";
import {
  Container,
  Description,
  LanguageText,
  Title,
} from "./user-repositories.styles";
import { UserReposProps } from "../GitHubUser/index";

export default function UserRepositories({
  name,
  description,
  language,
}: UserReposProps) {
  return (
    <Container>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <LanguageText>{language}</LanguageText>
    </Container>
  );
}
