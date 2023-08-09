import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

interface ButtonProps {
  dark?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => (props.dark ? "#191720" : "#fff")};
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const Description = styled.Text<ButtonProps>`
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  /* font-family: "rboto"; */
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.18px;
`;

export const Load = styled.ActivityIndicator.attrs(({ color, theme }) => ({
  // color: theme.COLORS.white,
  // color: "#000",
  color: color,
}))``;
