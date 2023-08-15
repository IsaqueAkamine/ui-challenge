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
  position: absolute;
  text-align: center;
  font-size: 20px;
  font-family: "Quicksand_700Bold";
  left: 80px;
  right: 80px;
`;
