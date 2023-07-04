import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 64px;
`;

export const Dot = styled(Animated.View)`
  height: 10px;
  border-radius: 5px;
  background-color: #493d8a;
  margin: 0 8px;
`;
