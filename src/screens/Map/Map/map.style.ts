import { Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { COLORS, SIZES } from "../../../constants";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const Title = styled.Text`
  font-size: 48px;
`;

export const MapContainer = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  top: ${SIZES.padding * 2}px;
  left: ${SIZES.padding}px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: ${SIZES.radius}px;
  border-width: 1px;
  border-color: ${COLORS.gray2};
  background-color: ${COLORS.white};
`;

export const BackIcon = styled(AntDesign)`
  color: ${COLORS.gray2};
`;
