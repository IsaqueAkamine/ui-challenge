import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";

import {
  collection,
  query,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { FIREBASE_DB } from "../../services/firebaseConfig";
import { AuthContext } from "../../contexts/auth";
import { ChatContext } from "../../contexts/ChatContext";

import HeaderSearchUser from "./HeaderSearchUser";
import HeaderUserList from "./HeaderUserList";
import { SIZES } from "../../constants";

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
  HeaderContainer,
  Title,
} from "./styles";

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

const ChatList: React.FC = () => {
  const { t } = useTranslation();
  const currentUser = useContext(AuthContext).user;
  const { dispatch } = useContext(ChatContext);
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserProps | null>(null);
  const [usersFirebase, setUsersFirebase] = useState<User[]>([]);
  const [usersFilteredFirebase, setFilteredUsersFirebase] = useState<User[]>(
    []
  );
  const [chats, setChats] = useState([]);

  async function handleSearch(): Promise<void> {
    const filteredUsers = usersFirebase?.filter(
      (user) => user.displayName == userName
    );
    setFilteredUsersFirebase(filteredUsers | []);
  }

  function handleClearSearch() {
    setUser(null);
    setUserName("");
    setFilteredUsersFirebase(usersFirebase);
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

      handleClearSearch();
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
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

  useEffect(() => {
    const getUsers = () => {
      const q = query(collection(FIREBASE_DB, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const users = [] as User[];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        const filteredUsers = users?.filter((item) => {
          return item.uid != currentUser.uid;
        });
        setFilteredUsersFirebase(filteredUsers);
        setUsersFirebase(filteredUsers);
      });

      return () => {
        unsubscribe();
      };
    };
    getUsers();
  }, []);

  return (
    <Container>
      <StatusBar style="light" />
      <HeaderContainer>
        <HeaderSearchUser
          input={{ onChangeText: setUserName, value: userName }}
          onSearch={handleSearch}
          onClear={handleClearSearch}
        />
        <HeaderUserList users={usersFilteredFirebase} />
      </HeaderContainer>
      <FlatList
        ListHeaderComponent={() => <Title>{t("chats.chat-title")}</Title>}
        data={chats}
        renderItem={({ item }) => ChatCard(item)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingHorizontal: SIZES.padding }}
      />
    </Container>
  );
};

export default ChatList;
