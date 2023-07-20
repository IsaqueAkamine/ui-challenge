import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${COLORS.userSecondary};
  font-family: "Quicksand_400Regular";
  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${COLORS.userPrimary};
  font-family: "Quicksand_400Regular";
  font-size: 20px;
  font-style: normal;
`;
