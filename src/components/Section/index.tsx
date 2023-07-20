import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";

import { Container, Title } from "./section.style";

interface SectionProps {
  containerStyle?: ViewStyle;
  title: string;
  children: ReactNode;
}

function Section({ containerStyle, title, children }: SectionProps) {
  return (
    <Container style={{ ...containerStyle }}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Section;
