import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 24px;
  font-family: "Quicksand_700Bold";
`;
