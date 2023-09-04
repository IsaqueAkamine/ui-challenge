import styled from "styled-components/native";
import { COLORS } from "../../constants";

interface ButtonLanguageProps {
  selected: boolean;
}

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

export const Description = styled.Text`
  margin-left: 6px;
`;

export const LanguageButton = styled.TouchableOpacity<ButtonLanguageProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;

  padding: 2px 20px;
  align-items: center;
  border-width: 1px;
  /* border-color: #b0b0b0; */
  /* border-color: ${(props) =>
    props.selected ? COLORS.black : "transparent"}; */
  border-color: ${(props) =>
    props.selected ? COLORS.lightOrange3 : "#b0b0b0"};
  border-radius: 50px;
`;

export const FlagImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ButtonLanguage = styled.TouchableOpacity<ButtonLanguageProps>`
  border-color: ${(props) => (props.selected ? COLORS.black : "transparent")};
  border-width: 1px;
  border-radius: 4px;
  background-color: ${COLORS.userFollowButton};
  padding: 5px;
`;
