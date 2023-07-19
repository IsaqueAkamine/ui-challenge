import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../colors";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  /* padding: 0 22px; */
  padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${COLORS.searchResults.buttonFilters};
  height: 35px;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 100px;
`;

export const FilterButtonText = styled.Text`
  font-size: 12px;
  font-family: "Quicksand_400Regular";
  color: ${COLORS.searchResults.buttonFilterText};
`;

export const FilterButtonIcon = styled.Image`
  margin-left: 4px;
  width: 24px;
  height: 24px;
`;

export const TitleContainer = styled.View`
  margin-top: 14px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Title = styled.Text`
  flex: 0.5;
  font-size: 28px;
  font-family: "Quicksand_400Regular";
`;

export const JobsFoundText = styled.Text`
  flex: 0.5;
  font-size: 14px;
  font-family: "Quicksand_400Regular";
  text-align: right;
`;

export const JobFlatlist = styled.FlatList`
  padding: 0 22px;
`;
