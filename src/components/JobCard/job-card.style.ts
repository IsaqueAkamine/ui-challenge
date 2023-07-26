import { Feather, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors"; 

export const Container = styled.View`
  padding: 24px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${COLORS.searchResults.primaryText};
  font-family: "Quicksand_700Bold";
  font-size: 18px;
`;

export const LikeIcon = styled(FontAwesome)`
  color: ${COLORS.searchResults.primaryText};
`;

export const ExperienceContainer = styled.View`
  margin-top: 9px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ExperienceTextContainer = styled.View`
  background-color: ${COLORS.jobsCard.experienceBackground};
  padding: 7px 12px;
  border-radius: 100px;
`;

export const ExperienceText = styled.Text`
  color: ${COLORS.jobsCard.experienceText};
  font-size: 12px;
`;

export const SalaryText = styled.Text`
  color: ${COLORS.jobsCard.secondaryText};
  font-size: 14px;
`;

export const CompanyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 9px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.jobsCard.logoBackground};
  padding: 7px;
  border-radius: 10px;
`;

export const LogoImg = styled.Image`
  width: 42px;
  height: 42px;
`;

export const CompanyInfoContainer = styled.View`
  margin-left: 12px;
`;

export const CompanyName = styled.Text`
  color: ${COLORS.jobsCard.primaryText};
  font-size: 18px;
  font-family: "Quicksand_700Bold";
`;

export const CompanyLocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PinIcon = styled(Feather)`
  color: ${COLORS.jobsCard.secondaryText};
`;

export const CompanyLocation = styled.Text`
  margin-left: 2px;
  color: ${COLORS.jobsCard.secondaryText};
`;
