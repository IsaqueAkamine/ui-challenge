import React, { useContext, useEffect, useState } from "react";

import {
  CardContainer,
  CardDate,
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

interface UserProps {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
interface ChatUserProps {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  lastMessage: string;
  date: string;
}

const ChatList: React.FC = () => {
  const currentUser = useContext(AuthContext).user;
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserProps | null>(null);
  const [chats, setChats] = useState([]);

  async function handleSearch(): Promise<void> {
    const q = query(
      collection(FIREBASE_DB, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      Alert.alert("User", error.message);
    }
  }

  function handleNavigation() {
    navigation.navigate("Message");
  }

  function ChatCard(item: ChatUserProps) {
    console.log("chatUser: ", item);
    console.log("info: ", item[1]);
    const chatUser = item[1];
    return (
      <CardContainer activeOpacity={0.7} onPress={handleNavigation}>
        <CardUserImage source={{ uri: chatUser?.userInfo?.photoURL }} />
        <CardUserInfo>
          <CardUserName>{chatUser?.userInfo?.displayName}</CardUserName>
          {chatUser?.userInfo?.lastMessage && (
            <CardLastMessage>{chatUser?.userInfo?.lastMessage}</CardLastMessage>
          )}
        </CardUserInfo>
        {chatUser?.date && <CardDate>{chatUser?.date.seconds}</CardDate>}
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
          const res = Object.entries(doc.data());
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
