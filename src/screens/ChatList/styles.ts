import styled from "styled-components/native";
import { COLORS, SIZES } from "../../constants";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.white};
`;
export const Container = styled.View`
  flex: 1;
  padding: 0 ${SIZES.padding}px;
`;

export const Title = styled.Text``;

export const CardContainer = styled.TouchableOpacity`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.gray};
`;

export const CardUserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const CardUserInfo = styled.View`
  flex: 1;
  margin: 0 12px;
`;

export const CardUserName = styled.Text``;

export const CardLastMessage = styled.Text``;

export const CardDate = styled.Text``;
