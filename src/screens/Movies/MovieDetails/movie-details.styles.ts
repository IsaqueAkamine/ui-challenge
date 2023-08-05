import styled from "styled-components/native";
import { COLORS } from "../../../constants";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const Container = styled.View`
  flex: 1;
  padding-left: 28px;
  padding-right: 28px;
  align-items: center;
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
