import { Platform, StatusBar } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

import styled from "styled-components/native";
import { COLORS } from "../../../constants";

const paddingTop = `${
  Platform.OS === "ios" ? getStatusBarHeight() : StatusBar.currentHeight
}px`;

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
  padding-top: ${paddingTop};
`;

export const Title = styled.Text`
  position: absolute;
  margin: 26px 0 0 20px;
  padding-top: ${paddingTop};
  color: #060075;
  font-size: 50px;
  font-family: "Quicksand_700Bold";
  z-index: 10;
`;

export const Reactangle = styled.View`
  position: absolute;
  background-color: #faff00;
  width: 80%;
  height: 75%;
  right: 0;
  bottom: 10%;
`;

export const Image = styled.Image`
  position: absolute;
  right: 0;
  bottom: ${getBottomSpace()}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #060075;
  padding: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 70%;

  position: absolute;
  align-self: center;
  bottom: ${getBottomSpace()}px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: "Quicksand_700Bold";
  color: ${COLORS.white};
`;
