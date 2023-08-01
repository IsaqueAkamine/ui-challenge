import { TextStyle, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Title } from "./header.style";

interface HeaderProps {
  iconColor?: string;
  containerStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  rightButton?: () => {};
}

export default function Header({
  iconColor = "#FFF",
  containerStyle,
  title,
  titleStyle,
  rightButton,
}: HeaderProps) {
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }

  function renderTitle() {
    return <Title style={titleStyle}>{title}</Title>;
  }

  return (
    <Container style={{ ...containerStyle }}>
      <BackButton onPress={handleBackNavigation}>
        <Feather name="arrow-left" size={24} color={iconColor} />
      </BackButton>
      {title && renderTitle()}
      {rightButton && rightButton()}
    </Container>
  );
}
