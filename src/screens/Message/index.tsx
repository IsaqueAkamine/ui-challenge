import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
// import * as Firestore from "firebase/firestore";
import { Database, getDatabase, onValue, ref, set } from "firebase/database";

import { GiftedChat } from "react-native-gifted-chat";

import { Container, Title } from "./styles";
import { Image } from "react-native";
import Header from "../../components/Header";
import { SIZES } from "../../constants";
import { FIREBASE_DB, auth } from "../../services/firebaseConfig";
import {
  getFirestore,
  DocumentData,
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { FirebaseAuth } from "@firebase/auth-types";

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

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: "Hello developer",
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: "React Native Designer",
  //         avatar: "https://i.pravatar.cc/50",
  //       },
  //     },
  //   ]);
  // }, []);

  useLayoutEffect(() => {
    const chatRef = doc(FIREBASE_DB, "chats", `${auth.currentUser?.uid}`);
    const unsub = onSnapshot(chatRef, (doc: { data: () => MessageProps }) => {
      const res = doc.data().messages;
      console.log("Current data: ", res);
      if (res) {
        setMessages([
          {
            _id: res._id,
            text: res.text,
            createdAt: res.createdAt.toDate(),
            user: res.user,
          },
        ]);
        // setMessages(res);
      }
    });

    return unsub;
  }, []);

  async function createChat(message: MessageProps) {
    try {
      await setDoc(doc(FIREBASE_DB, "chats", `${auth.currentUser?.uid}`), {
        messages: {
          _id: message._id,
          text: message.text,
          createdAt: message.createdAt,
          user: message.user,
        },
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("There was an error on messages", error);
    }
  }

  // async function writeUserData(userId, name, email, imageUrl) {
  //   await setDoc(doc(FIREBASE_DB, "usersNew/", userId), {
  //     id: userId,
  //     username: name,
  //     email: 'teste@teste',
  //     profile_picture: imageUrl,
  //   });
  // }

  const onSend = useCallback((messages: MessageProps[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, text, createdAt, user } = messages[0];

    // createChat({ _id, text, createdAt, user });
  }, []);

  return (
    <Container>
      <Header
        title="Chat"
        iconColor="#000"
        containerStyle={{ paddingHorizontal: SIZES.padding }}
      />
      <GiftedChat
        showAvatarForEveryMessage
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: auth.currentUser?.uid,
          name: auth.currentUser?.displayName,
          avatar: auth.currentUser?.photoURL,
        }}
      />
    </Container>
  );
};

export default Message;
