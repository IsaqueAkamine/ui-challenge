import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useContext,
} from "react";

import { GiftedChat, QuickReplies, User } from "react-native-gifted-chat";

import { Container, Title } from "./styles";
import { Image } from "react-native";
import Header from "../../components/Header";
import { SIZES } from "../../constants";
import { FIREBASE_DB, auth } from "../../services/firebaseConfig";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { ChatContext } from "../../contexts/ChatContext";
import { AuthContext } from "../../contexts/auth";

import { v4 as uuid } from "uuid";
interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
}
interface MessageProps extends IMessage {
  messages: [
    {
      date: {};
      id: string;
      senderId: string;
      text: string;
    }
  ];
}
// interface MessageProps {
//   _id: number;
//   text: string;
//   createdAt: Date;
//   user: {
//     _id: number;
//     name: string;
//     avatar: string;
//   };
// }

const Message: React.FC = () => {
  const currentUser = useContext(AuthContext).user;
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(FIREBASE_DB, "chats", data.chatId),
      (doc) => {
        if (doc.exists()) {
          const msgs = doc
            .data()
            .messages.sort((a, b) => b.date.seconds - a.date.seconds)
            .map((msg) => {
              const milliseconds = msg.date.seconds * 1000;
              const date = new Date(milliseconds);
              return {
                _id: msg.id,
                text: msg.text,
                createdAt: date,
                user: {
                  _id: msg.senderId,
                  name:
                    msg.senderId == currentUser?.uid
                      ? currentUser?.displayName
                      : data.user.displayName,
                  avatar:
                    msg.senderId == currentUser?.uid
                      ? currentUser?.photoURL
                      : data.user.photoURL,
                },
              };
            });

          setMessages(msgs);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  // useLayoutEffect(() => {
  //   const chatRef = doc(FIREBASE_DB, "chats", `${auth.currentUser?.uid}`);
  //   const unsub = onSnapshot(chatRef, (doc: { data: () => MessageProps }) => {
  //     const res = doc.data();
  //     console.log("Current data: ", res);
  //     // if (res) {
  //     //   setMessages([
  //     //     {
  //     //       _id: res._id,
  //     //       text: res.text,
  //     //       createdAt: res.createdAt.toDate(),
  //     //       user: res.user,
  //     //     },
  //     //   ]);
  //     //   // setMessages(res);
  //     // }
  //   });

  //   return unsub;
  // }, []);

  // async function createChat(message: MessageProps) {
  //   try {
  //     await setDoc(doc(FIREBASE_DB, "chats", `${auth.currentUser?.uid}`), {
  //       messages: {
  //         _id: message._id,
  //         text: message.text,
  //         createdAt: message.createdAt,
  //         user: message.user,
  //       },
  //     });
  //     // console.log("Document written with ID: ", docRef.id);
  //   } catch (error) {
  //     console.error("There was an error on messages", error);
  //   }
  // }

  // const onSend = useCallback((messages: MessageProps[]) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages)
  //   );
  //   const { _id, text, createdAt, user } = messages[0];
  // }, []);

  const onSend = async (message) => {
    // setAaa((previousMessages) => GiftedChat.append(previousMessages, messages));
    // console.log("TEXTO: ", text[0].text);
    const msg = message[0].text;
    const id = message[0]._id;

    await updateDoc(doc(FIREBASE_DB, "chats", data.chatId), {
      messages: arrayUnion({
        // id: uuid(),
        id: id,
        text: msg,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(FIREBASE_DB, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text: msg,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(FIREBASE_DB, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text: msg,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
  };

  return (
    <Container>
      <Header
        title={data.user?.displayName}
        iconColor="#000"
        containerStyle={{ paddingHorizontal: SIZES.padding }}
      />
      <GiftedChat
        showAvatarForEveryMessage
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: currentUser.uid,
          name: currentUser.displayName,
          avatar: currentUser?.photoURL,
        }}
      />
    </Container>
  );
};

export default Message;
