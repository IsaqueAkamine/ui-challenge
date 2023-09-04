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

export const CardContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 5px;
  width: ${SIZES.width / 2 - 60}px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
`;

export const CardDescription = styled.Text``;
