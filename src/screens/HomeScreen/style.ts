import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants";

interface ButtonLanguageProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 10px ${SIZES.padding}px;
  background-color: ${COLORS.white};
`;

export const ButtonLanguageContainer = styled.View`
  margin-top: 12px;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const ButtonLanguage = styled.TouchableOpacity<ButtonLanguageProps>`
  border-color: ${(props) => (props.selected ? COLORS.black : "transparent")};
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

export const WelcomeContainer = styled.View`
  margin-top: 12px;
`;

export const WelcomeText = styled.Text`
  color: ${COLORS.onboardingTitlePrimary};
  font-family: "Quicksand_700Bold";
  font-size: 26px;
`;

export const CardContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 5px;
  width: ${SIZES.width / 2 - 60}px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
`;

export const CardImage = styled.Image`
  height: 90px;
  width: 90px;
`;

export const CardDescription = styled.Text``;
