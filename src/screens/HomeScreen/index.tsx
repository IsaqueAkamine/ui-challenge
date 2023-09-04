import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import LanguageSelector from "../../components/LanguageSelector";

import { CardContainer, CardDescription, Container } from "./style";

interface ScreenProps {
  id: number;
  description: string;
  icon: string;
  path: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();

  const list = [
    { id: 1, description: "Profile", icon: "user", path: "Profile" },
    { id: 2, description: "Github User", icon: "github", path: "UserData" },
    { id: 3, description: "Find a job", icon: "search", path: "SearchResults" },
    { id: 4, description: "Movies", icon: "local-movies", path: "MovieStack" },
    { id: 5, description: "Chats", icon: "message", path: "Chat" },
  ];

  function handleNavigate(path: string) {
    navigation.navigate(path);
  }

  function renderCard(item: ScreenProps) {
    return (
      <CardContainer onPress={() => handleNavigate(item.path)}>
        {item.id > 3 ? (
          <MaterialIcons name={item.icon} size={80} color="#ddd" />
        ) : (
          <Feather name={item.icon} size={80} color="#ddd" />
        )}
        <CardDescription>{item.description}</CardDescription>
      </CardContainer>
    );
  }

  return (
    <Container>
      <LanguageSelector />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        numColumns={2}
        columnWrapperStyle={{ gap: 5, justifyContent: "space-around" }}
        renderItem={({ item }) => renderCard(item)}
        style={{ marginTop: 20 }}
        contentContainerStyle={{ gap: 5 }}
      />
    </Container>
  );
}
