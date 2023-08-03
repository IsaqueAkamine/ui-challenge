import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 29px;
`;

export const AnimatedView = styled(Animated.View)``;

export const LinearImageContainer = styled(LinearGradient)`
  width: 70px;
  height: 105px;
  border-radius: 5px;
`;

export const LinearDescription = styled(LinearGradient)`
  height: 20px;
  margin-left: 22px;
  width: 50%;
  border-radius: 5px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  width: 70px;
  height: 105px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const DescriptionContainer = styled.View`
  margin-top: 7px;
  margin-left: 22px;
  height: 20px;
  width: 50%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.12);
`;
