import React, { useContext } from "react";

import {
  CardContainer,
  CardDate,
  CardLastMessage,
  CardUserImage,
  CardUserInfo,
  CardUserName,
  Container,
  SafeArea,
  Title,
} from "./styles";
import HeaderChatList from "./HeaderChatList";
import { FlatList } from "react-native";
import { AuthContext } from "../../contexts/auth";

const ChatList: React.FC = () => {
  const { user } = useContext(AuthContext);

  const chatList = [1, 2, 3];

  function renderCard() {
    return (
      <CardContainer activeOpacity={0.7}>
        <CardUserImage source={{ uri: user?.photoURL }} />
        <CardUserInfo>
          <CardUserName>username</CardUserName>
          <CardLastMessage>Last message</CardLastMessage>
        </CardUserInfo>
        <CardDate>13/08/2023</CardDate>
      </CardContainer>
    );
  }

  return (
    <SafeArea>
      <Container>
        <HeaderChatList />
        <Title>Chat list</Title>
        <FlatList
          data={chatList}
          renderItem={({ item }) => renderCard(item)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />
      </Container>
    </SafeArea>
  );
};

export default ChatList;
