import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

export const Container = styled.View`
  padding: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${COLORS.userSecondary};
`;

export const Title = styled.Text`
  color: ${COLORS.userPrimary};
  font-family: "Quicksand_700Bold";
  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${COLORS.userPrimary};
  font-family: "Quicksand_400Regular";
  font-size: 14px;
  font-style: normal;
  padding: 3px 0;
`;

export const LanguageText = styled.Text`
  color: ${COLORS.userText};
  font-family: "Quicksand_400Regular";
  font-size: 16px;
  font-style: normal;
`;
