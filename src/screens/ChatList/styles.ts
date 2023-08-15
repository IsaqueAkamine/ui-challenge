import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { COLORS, SIZES } from "../../constants";
import { Platform, StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  /* padding: 0 ${SIZES.padding}px; */
  background-color: ${COLORS.white};
  /* padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px; */
`;

export const HeaderContainer = styled.View`
  padding: 0 ${SIZES.padding}px;
  padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
  background-color: ${COLORS.chats.header};
`;

export const Title = styled.Text`
  margin: 12px 0 0 0;
  font-family: "Quicksand_700Bold";
  font-size: 22px;
`;

export const CardContainer = styled.TouchableOpacity`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.gray};
`;

export const CardUserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const CardUserInfo = styled.View`
  flex: 1;
  margin: 0 12px;
`;

export const CardUserName = styled.Text`
  font-family: "Quicksand_700Bold";
  font-size: 16px;
`;

export const CardLastMessage = styled.Text`
  font-family: "Quicksand_400Regular";
  font-size: 14px;
`;

export const CardDateContainer = styled.View`
  align-items: flex-end;
`;
export const CardDate = styled.Text``;
export const CardDateTime = styled.Text`
  margin: 4px 0 0 0;
  font-size: 12px;
  color: ${COLORS.gray};
`;
