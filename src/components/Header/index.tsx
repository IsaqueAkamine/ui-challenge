import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BackButton, Container } from "./header.style";

interface HeaderProps {
  iconColor?: string;
}

export default function Header({ iconColor = "#FFF" }: HeaderProps) {
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }
  return (
    <Container>
      <BackButton onPress={handleBackNavigation}>
        <Feather name="arrow-left" size={24} color={iconColor} />
      </BackButton>
    </Container>
  );
}
