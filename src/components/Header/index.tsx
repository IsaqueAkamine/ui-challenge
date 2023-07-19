import { ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BackButton, Container } from "./header.style";

interface HeaderProps {
  iconColor?: string;
  conteinerStyle?: ViewStyle;
  rightButton?: () => {};
}

export default function Header({
  iconColor = "#FFF",
  conteinerStyle,
  rightButton,
}: HeaderProps) {
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }

  return (
    <Container style={{ ...conteinerStyle }}>
      <BackButton onPress={handleBackNavigation}>
        <Feather name="arrow-left" size={24} color={iconColor} />
      </BackButton>
      {rightButton && rightButton()}
    </Container>
  );
}
