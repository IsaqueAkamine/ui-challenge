import styled from "styled-components/native";
import { COLORS } from "../../colors";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  flex: 0.7;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 0.3;
`;

export const ItemContent = styled.View`
  flex: 3;
`;

export const Title = styled.Text`
  color: ${COLORS.onboardingTitlePrimary};
  font-family: "Quicksand_700Bold";
  font-size: 30px;
  margin: 42px 0 0 0;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${COLORS.onboardingSecondaryText};
  font-family: "Quicksand_400Regular";
  font-size: 20px;
  margin: 19px 0 0 0;
  text-align: center;
  padding: 0 40px;
`;

// export const GroupScreens = styled.View`
//   background-color: #453988;
//   width: 100px;
//   height: 10px;
//   margin: 42px 0 0 0;
// `;

// export const ButtonContainer = styled.View`
//   background-color: #fbfdfd;
//   width: 136px;
//   height: 136px;
//   margin: 58px 0 0 0;
//   border-radius: 75px;
//   border-width: 1px;
//   border-color: #d1d1d1;
//   border-right-width: 3px;
//   border-right-color: ${COLORS.onboardingButtonPrimary};
//   transform: rotate(-45deg);
//   align-items: center;
//   justify-content: center;
// `;

// export const ButtonNavigate = styled.TouchableOpacity`
//   position: absolute;
//   background-color: ${COLORS.onboardingButtonPrimary};
//   width: 104px;
//   height: 104px;
//   border-radius: 55px;
//   transform: rotate(45deg);
//   align-items: center;
//   justify-content: center;
// `;
