import React, { useState, useCallback, useEffect } from "react";

import { GiftedChat } from "react-native-gifted-chat";

import { Container, Title } from "./styles";
import { Image } from "react-native";
import Header from "../../components/Header";
import { SIZES } from "../../constants";

interface MessageProps {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

const Message: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 2,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },

      {
        _id: 3,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 4,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 5,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 6,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 7,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 8,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 9,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 10,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 11,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 12,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 13,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 14,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 15,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 16,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 17,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 18,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 19,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Designer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
      {
        _id: 20,
        text: "Hello designer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native Developer",
          avatar: "https://i.pravatar.cc/50",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <Container>
      <Header
        title="Chat"
        iconColor="#000"
        containerStyle={{ paddingHorizontal: SIZES.padding }}
      />
      <GiftedChat
        renderAvatar={(props) => {
          return (
            <Image
              source={{ uri: `${props.currentMessage?.user.avatar}` }}
              width={35}
              height={35}
              resizeMode="contain"
              style={{ borderRadius: 25 }}
            />
          );
        }}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
};

export default Message;
