import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
  padding-bottom: ${getBottomSpace()}px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Image = styled.Image`
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
`;

export const UserName = styled.Text`
  color: ${COLORS.userPrimary};
  font-family: "Sahitya_700Bold";
  font-size: 20px;
  text-align: center;
  margin-top: 27px;
`;

export const UserDescription = styled.Text`
  color: ${COLORS.userSecondary};
  font-family: "Quicksand_400Regular";
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
`;

export const UserLocation = styled(UserDescription)``;

export const FollowButton = styled.TouchableOpacity`
  background-color: ${COLORS.userFollowButton};
  height: 40px;
  border-radius: 4px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px 42px;
`;

export const FollowButtonText = styled.Text`
  color: ${COLORS.white};
  font-family: "Quicksand_700Bold";
  font-size: 16px;
  text-align: center;
`;

export const UserDataContainer = styled.View`
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
