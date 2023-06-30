import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #493e8a;
  font-family: "Quicksand_700Bold";
  font-size: 30px;
  margin: 42px 0 0 0;
`;

export const Description = styled.Text`
  color: #4a4d53;
  font-family: "Quicksand_400Regular";
  font-size: 20px;
  margin: 19px 0 0 0;
  text-align: center;
`;

export const GroupScreens = styled.View`
  background-color: #453988;
  width: 100px;
  height: 10px;
  margin: 42px 0 0 0;
`;

export const ButtonNavigate = styled.TouchableOpacity`
  background-color: #ff5678;
  width: 150px;
  height: 150px;
  margin: 42px 0 0 0;
  border-radius: 75px;
`;
