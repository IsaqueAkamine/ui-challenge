import { ScrollView } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { COLORS } from "../../../constants";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled(ScrollView)`
  flex: 1;
  padding-left: 28px;
  padding-right: 28px;
`;

export const FavoriteIcon = styled(FontAwesome)`
  color: ${COLORS.searchResults.primaryText};
`;

export const MovieImage = styled.Image`
  margin-top: 20px;
  width: 70%;
  height: 45%;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 26px;
  color: ${COLORS.movies.primary};
  font-family: "Karma-Bold";
  font-size: 28px;
  text-align: center;
`;

export const Genre = styled.Text`
  color: ${COLORS.movies.primary};
  opacity: 0.5;
  font-family: "Poppins-Medium";
  font-size: 14px;
`;

export const RatingContainer = styled.View`
  margin-top: 12px;
`;

export const PlotText = styled.Text`
  margin-top: 16px;
  color: ${COLORS.movies.primary};
  opacity: 0.5;
  font-family: "Poppins-Medium";
  font-size: 14px;
  text-align: justify;
`;

export const AboutContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  gap: 14px;
`;

export const AboutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.white};
  padding: 8px 28px;
  border-radius: 8px;
`;

export const AboutButtonIcon = styled(AntDesign)``;

export const AboutButtonText = styled.Text`
  margin-left: 6px;
  font-family: "Karma-Bold";
  font-size: 16px;
  height: 24px;
`;

export const BuyButton = styled.TouchableOpacity`
  margin-top: 36px;
  background-color: ${COLORS.movies.actionButton};
  padding: 10px 50px;
  border-radius: 130px;
  align-items: center;
  justify-content: center;
`;

export const BuyButtonText = styled.Text`
  font-family: "Karma-Bold";
  font-size: 20px;
  color: ${COLORS.white};
  height: 28px;
`;
