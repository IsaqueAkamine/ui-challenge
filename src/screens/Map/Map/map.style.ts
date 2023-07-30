import { Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { COLORS } from "../../../constants";

const paddingTop = `${
  Platform.OS === "ios" ? getStatusBarHeight() : StatusBar.currentHeight
}px`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${paddingTop};
  background-color: ${COLORS.white};
`;

export const Title = styled.Text`
  font-size: 48px;
`;

export const MapContainer = styled.View`
  flex: 1;
`;
