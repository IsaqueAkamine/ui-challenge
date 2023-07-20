import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

export const Container = styled.View`
  gap: 3px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 14px;
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.14px;
`;

export const InputStyled = styled.TextInput`
  padding: 16px 18px;
  height: 56px;
  border-width: 1px;
  border-color: ${COLORS.loginInput};
  border-radius: 15px;
  /* color: #3F3F48; */
  color: #82838f;
  background-color: #1e1c24;
`;
