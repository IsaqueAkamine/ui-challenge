import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
`;

export const Title = styled.Text`
  color: ${COLORS.loginTitle};
  font-family: "Sahitya_700Bold";
  font-size: 42px;
  letter-spacing: -0.42px;
`;

export const Description = styled.Text`
  color: ${COLORS.loginGray5};
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.26px;
`;

export const Form = styled.View`
  flex: 1;
  gap: 36px;
  margin-top: 56px;
`;

export const Footer = styled.View`
  margin: 32px 0 0 0;
`;

export const HaveAccountContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 46px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const HaveAccountText = styled.Text`
  color: #7c7d89;
  text-align: center;
  font-size: 16px;
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 400;
  /* line-height: 140%; */
  letter-spacing: 0.16px;
`;
export const HaveAccountButton = styled.TouchableOpacity``;
export const HaveAccountSignUp = styled.Text`
  color: #f0f0f0;
  text-align: center;
  font-size: 16px;
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 400;
  /* line-height: 140%; */
  letter-spacing: 0.16px;
`;
