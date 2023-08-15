import styled from "styled-components/native";
import { COLORS } from "../../../constants";

export const Container = styled.View`
  padding: 20px 0 15px 0;
`;

export const UserContainer = styled.TouchableOpacity`
  align-items: center;
  width: 50px;
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const UserName = styled.Text`
  margin: 4px 0 0 0;
  font-family: "Poppins-Medium";
  font-size: 12px;
  letter-spacing: -0.2px;
  color: ${COLORS.white};
`;
