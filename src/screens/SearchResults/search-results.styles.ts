import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { COLORS } from "../../colors";

export const Container = styled.View`
  flex: 1;
  padding: 37px 22px 0 22px;
`;

export const Title = styled.Text`
  color: ${COLORS.white};
  font-family: "Quicksand_700Bold";
  font-size: 48px;
`;

export const Description = styled.Text`
  margin-top: 19px;
  color: ${COLORS.white};
  font-family: "Quicksand_400Regular";
  font-size: 16px;
`;

export const StartButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 29px;
  background-color: ${COLORS.white};
  padding: 14px 25px;
  border-radius: 100px;
`;

export const StartButtonText = styled.Text`
  font-family: "Quicksand_700Bold";
  font-size: 22px;
  letter-spacing: -0.44px;
  color: ${COLORS.searchResults.button};
`;

export const StartButtonIcon = styled(Feather)`
  color: ${COLORS.searchResults.button};
  margin-left: 9px;
`;
