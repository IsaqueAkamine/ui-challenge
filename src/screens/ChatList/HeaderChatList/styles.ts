import styled from "styled-components/native";
import { COLORS, SIZES } from "../../../constants";

export const Container = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Title = styled.Text``;

export const Input = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${COLORS.gray};
  padding: 6px 12px;
  margin: 0 10px;
`;
