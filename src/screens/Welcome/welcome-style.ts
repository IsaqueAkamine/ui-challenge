import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../colors";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.welcomeBackground};
  justify-content: space-between;
  padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
  padding-bottom: ${getBottomSpace()}px;
`;

export const Title = styled.Text`
  font-family: "Sahitya_700Bold";
  font-size: 52px;
  text-align: center;
  padding: 0 90px;
  letter-spacing: 0.52px;
  margin: 50px 0 0 0;
`;

export const Image = styled.Image`
  /* flex: 0.7; */
  position: absolute;
  margin: 90px 0 0 0;
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
