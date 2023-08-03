import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES } from "../../../constants";
import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
  gap: 20px;
  flex-direction: row;
`;

export const AnimatedView = styled(Animated.View)``;

export const LinearImageContainer = styled(LinearGradient)`
  width: 130px;
  height: 196px;
  border-radius: 10px;
`;

export const LinearDescription = styled(LinearGradient)`
  height: 20px;
  width: 100%;
  border-radius: 10px;
`;

export const CardContainer = styled.View`
  width: 130px;
`;

export const ImageContainer = styled.View`
  width: 130px;
  height: 196px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const DescriptionContainer = styled.View`
  margin-top: 19px;
  height: 20px;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.12);
`;
