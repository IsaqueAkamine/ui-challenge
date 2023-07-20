import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { COLORS, SIZES } from "../../constants";

export const ModalContainer = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.jobs.transparentBlack7};
`;

export const FilterHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Quicksand_700Bold";
  color: ${COLORS.jobsCard.primaryText};
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseButtonIcon = styled(Feather)`
  color: ${COLORS.jobsCard.primaryText};
  margin-left: 9px;
`;

export const SalaryRangeContainer = styled.View`
  align-items: center;
`;

export const TagsContainer = styled.View`
  margin-top: 14px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TagButton = styled.TouchableOpacity`
  width: 30%;
  height: 50px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-radius: ${SIZES.base}px;
  padding: 8px;
`;

export const TagButtonText = styled.Text`
  flex-wrap: wrap;
`;

export const ApplyButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: ${COLORS.jobs.primary};
  height: 50px;
  border-radius: ${SIZES.base}px;
  justify-content: center;
  align-items: center;
`;

export const ApplyButtonText = styled.Text`
  font-size: 18px;
  font-family: "Quicksand_700Bold";
  color: ${COLORS.white};
`;
