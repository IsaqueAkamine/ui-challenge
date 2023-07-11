import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../colors";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
  padding-bottom: ${getBottomSpace()}px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Title = styled.Text`
  color: ${COLORS.loginTitle};
  font-family: "Sahitya_700Bold";
  font-size: 42px;
  letter-spacing: -0.42px;
`;

export const Description = styled.Text`
  color: ${COLORS.loginGray5};
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.26px;
`;

export const Form = styled.View`
  flex: 1;
  gap: 36px;
  margin-top: 56px;
`;
