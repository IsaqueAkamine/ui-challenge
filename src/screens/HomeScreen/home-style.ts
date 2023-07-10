import styled from "styled-components/native";
import { COLORS } from "../../colors";

export const Container = styled.View`
  flex: 1;
  padding: 40px 28px;
  background-color: #fff;
`;

export const ButtonLanguageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const ButtonLanguage = styled.TouchableOpacity`
  border-color: ${COLORS.loginGray5};
  border-width: 1px;
  border-radius: 4px;
  background-color: ${COLORS.userFollowButton};
  padding: 5px;
`;

export const ButtonLanguageText = styled.Text`
  color: ${COLORS.white};
  font-family: "Quicksand_700Bold";
  font-size: 16px;
  text-align: center;
`;

export const ImageContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const WelcomeContainer = styled.View`
  flex: 1;
  margin-top: 35px;
`;

export const WelcomeText = styled.Text`
  color: ${COLORS.onboardingTitlePrimary};
  font-family: "Quicksand_700Bold";
  font-size: 26px;
`;

export const ClearButton = styled.TouchableOpacity`
  background-color: ${COLORS.onboardingButtonPrimary};
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  margin-top: 12px;
  align-self: center;
`;

export const ClearButtonText = styled.Text`
  color: ${COLORS.white};
  font-family: "Quicksand_700Bold";
  font-size: 16px;
  text-align: center;
`;
