import React, { useContext, useEffect, useState } from "react";

import {
  CardContainer,
  CardDate,
  CardDateContainer,
  CardDateTime,
  CardLastMessage,
  CardUserImage,
  CardUserInfo,
  CardUserName,
  Container,
  NewCardContainer,
  SafeArea,
  Title,
} from "./styles";
import HeaderChatList from "./HeaderChatList";
import { Alert, FlatList } from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
  collection,
  getDocs,
  query,
  setDoc,
  doc,
  where,
  updateDoc,
  serverTimestamp,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../services/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { ChatContext } from "../../contexts/ChatContext";

interface UserProps {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

interface UserInfoProps {
  date: {
    nanoseconds: number;
    seconds: number;
  };
  userInfo: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
}
interface ChatUserProps {
  0: string;
  1: UserInfoProps;
}
// interface ChatUserProps {
//   displayName: string;
//   email: string;
//   photoURL: string;
//   uid: string;
//   lastMessage: string;
//   date: string;
// }

const ChatList: React.FC = () => {
  const currentUser = useContext(AuthContext).user;
  const { dispatch } = useContext(ChatContext);
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserProps | null>(null);
  const [chats, setChats] = useState([]);
  const [error, setError] = useState([]);

  async function handleSearch(): Promise<void> {
    const q = query(
      collection(FIREBASE_DB, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } else {
        Alert.alert("Error", "User not found!");
      }
    } catch (error) {
      Alert.alert("User", error);
    }
  }

  function handleClearSearch() {
    setUser(null);
    setUserName("");
  }

  function handleNavigation(u: UserInfoProps) {
    dispatch({ type: "CHANGE_USER", payload: u });
    navigation.navigate("Message");
  }

  function formatSecondsToDate(seconds: number) {
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function formatSecondsToDateTime(seconds: number) {
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);

    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${hour}:${minute}`;
  }

  function ChatCard(item: ChatUserProps) {
    const chatUser = item[1];
    return (
      <CardContainer
        activeOpacity={0.7}
        onPress={() => handleNavigation(chatUser.userInfo)}
      >
        <CardUserImage source={{ uri: chatUser?.userInfo?.photoURL }} />
        <CardUserInfo>
          <CardUserName>{chatUser?.userInfo?.displayName}</CardUserName>
          {chatUser?.lastMessage?.text && (
            <CardLastMessage numberOfLines={1} ellipsizeMode="tail">
              {chatUser?.lastMessage?.text}
            </CardLastMessage>
          )}
        </CardUserInfo>
        {chatUser?.date && (
          <CardDateContainer>
            <CardDate>{formatSecondsToDate(chatUser?.date.seconds)}</CardDate>
            <CardDateTime>
              {formatSecondsToDateTime(chatUser?.date.seconds)}
            </CardDateTime>
          </CardDateContainer>
        )}
      </CardContainer>
    );
  }

  async function handleSelect() {
    const combinedId =
      currentUser?.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(FIREBASE_DB, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(FIREBASE_DB, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(FIREBASE_DB, "userChats", currentUser?.uid), {
          [combinedId + ".userInfo"]: {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(FIREBASE_DB, "userChats", user?.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setUser(null);
      setUserName("");
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
  }

  function NewChatCard(userCard: UserProps) {
    return (
      <NewCardContainer activeOpacity={0.7} onPress={handleSelect}>
        <CardUserImage source={{ uri: userCard?.photoURL }} />
        <CardUserInfo>
          <CardUserName>{userCard?.displayName}</CardUserName>
        </CardUserInfo>
      </NewCardContainer>
    );
  }

  useEffect(() => {
    const getChats = () => {
      const unsubscribe = onSnapshot(
        doc(FIREBASE_DB, "userChats", currentUser?.uid),
        (doc) => {
          const res = Object.entries(doc.data()).sort(
            (a, b) => b[1].date - a[1].date
          );
          setChats(res);
        }
      );
      return () => {
        unsubscribe();
      };
    };
    currentUser?.uid && getChats();
  }, [currentUser.uid]);

  return (
    <SafeArea>
      <Container>
        <HeaderChatList
          input={{ onChangeText: setUserName, value: userName }}
          onSearch={handleSearch}
          onClear={handleClearSearch}
        />
        {user && (
          <>
            <Title>New chat with</Title>
            {NewChatCard(user)}
          </>
        )}
        <FlatList
          data={chats}
          renderItem={({ item }) => ChatCard(item)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />
      </Container>
    </SafeArea>
  );
};

export default ChatList;
