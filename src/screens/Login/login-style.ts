import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../colors";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
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
  /* line-height: 100%; */
  letter-spacing: -0.42px;

  /* text-align: center;
  padding: 0 90px;
  letter-spacing: 0.52px;
  margin: 50px 0 0 0; */
`;

export const Description = styled.Text`
  color: ${COLORS.loginGray5};
  font-size: 26px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  /* line-height: 144%; */
  letter-spacing: 0.26px;
`;

export const Form = styled.View`
  gap: 36px;
`;

export const ActionButtonsContainer = styled.View``;

export const ButtonsContainer = styled.View`
  padding: 0 32px;
  gap: 10px;
  margin: 0 0 20px 0;
`;

export const ForgotPasswordContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;
export const ForgotPasswordText = styled.Text``;
