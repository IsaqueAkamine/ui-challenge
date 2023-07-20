import styled from "styled-components/native";
import { COLORS } from "../../../constants/colors";

export const Image = styled.Image`
  flex: 0.7;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 0.3;
`;

export const Title = styled.Text`
  color: ${COLORS.onboardingTitlePrimary};
  font-family: "Quicksand_700Bold";
  font-size: 30px;
  margin: 42px 0 0 0;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${COLORS.onboardingSecondaryText};
  font-family: "Quicksand_400Regular";
  font-size: 20px;
  margin: 19px 0 0 0;
  text-align: center;
  padding: 0 40px;
`;
