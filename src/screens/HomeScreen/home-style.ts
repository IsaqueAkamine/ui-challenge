import styled from "styled-components/native";
import { COLORS } from "../../colors";

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  align-items: center;
  background-color: #fff;
`;

export const ClearButton = styled.TouchableOpacity`
  background-color: ${COLORS.onboardingButtonPrimary};
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  margin-top: 12px;
`;

export const ClearButtonText = styled.Text`
  color: ${COLORS.white};
  font-family: "Quicksand_700Bold";
  font-size: 16px;
  text-align: center;
`;
