import { AntDesign, Feather } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { COLORS, SIZES } from "../../constants";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const Title = styled.Text`
  font-size: 48px;
`;

export const MapContainer = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  top: ${SIZES.padding * 2}px;
  left: ${SIZES.padding}px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: ${SIZES.radius}px;
  border-width: 1px;
  border-color: ${COLORS.gray2};
  background-color: ${COLORS.white};
`;

export const BackIcon = styled(AntDesign)`
  color: ${COLORS.gray2};
`;

export const Icon = styled(Feather)`
  margin-left: 12px;
  color: ${COLORS.black};
`;

export const InfoContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: ${SIZES.padding}px;
  padding-bottom: ${getBottomSpace()}px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${COLORS.white};
`;

export const SectionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const SectionDescriptionContainer = styled.View`
  margin-left: 28px;
  margin-right: 28px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: ${COLORS.gray};
`;

export const InfoDescription = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const CompanyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ff6c44;
  border-radius: ${SIZES.radius}px;
  padding: ${SIZES.padding / 2}px;
`;

export const CompanyImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CompanyInfoContainer = styled.View`
  margin-left: 12px;
  gap: 4px;
`;

export const CompanyName = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

export const CompanyJobTitle = styled.Text`
  font-size: 12px;
  color: ${COLORS.white};
`;
