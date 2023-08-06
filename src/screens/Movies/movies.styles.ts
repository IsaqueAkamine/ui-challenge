import { Platform, StatusBar } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { COLORS, SIZES } from "../../constants";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.movies.background};
  padding-top: ${Platform.OS === "ios"
    ? getStatusBarHeight()
    : StatusBar.currentHeight}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${SIZES.padding}px;
`;

export const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const HeaderText = styled.Text`
  margin-left: 12px;
  font-family: "Karma-Bold";
  font-size: 18px;
  letter-spacing: -0.18px;
`;

export const Icon = styled(AntDesign)`
  color: ${COLORS.gray2};
`;

export const Title = styled.Text`
  margin-top: 30px;
  margin-left: ${SIZES.padding}px;
  color: ${COLORS.movies.primary};
  font-family: "Karma-Bold";
  font-size: 28px;
  letter-spacing: -0.28px;
`;

export const Description = styled.Text`
  color: ${COLORS.movies.primary};
  opacity: 0.5;
  font-family: "Poppins-Medium";
  font-size: 14px;
`;

export const HorizontalMovieContainer = styled.TouchableOpacity`
  width: 130px;
  /* padding-left: ${SIZES.padding}px; */
  /* padding-right: ${SIZES.padding}px; */
`;

export const HorizontalMovieImgCover = styled.Image`
  width: 130px;
  height: 196px;
  border-radius: 10px;
`;

export const MovieTitle = styled.Text`
  margin-top: 19px;
  color: ${COLORS.movies.primary};
  font-family: "Karma-Bold";
  font-size: 16px;
`;

export const VerticalMovieContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const VerticalMovieImgCover = styled.Image`
  width: 70px;
  height: 105px;
  border-radius: 5px;
`;

export const VerticalMovieInfoContainer = styled.View`
  flex: 1;
  margin-left: 22px;
  margin-right: 22px;
`;

export const VerticalMovieTitle = styled.Text`
  color: ${COLORS.movies.primary};
  font-family: "Karma-Bold";
  font-size: 16px;
`;

export const FavoriteIcon = styled(FontAwesome)`
  color: ${COLORS.searchResults.primaryText};
`;
