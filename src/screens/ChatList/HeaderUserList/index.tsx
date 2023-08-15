import React, { useContext } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { User } from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { AuthContext } from "../../../contexts/auth";
import { ChatContext } from "../../../contexts/ChatContext";

import { FIREBASE_DB } from "../../../services/firebaseConfig";

import { Container, UserContainer, UserImage, UserName } from "./styles";
import { SIZES } from "../../../constants";

interface HeaderUserProps {
  users: User[];
}

const HeaderUserList: React.FC<HeaderUserProps> = ({ users }) => {
  const currentUser = useContext(AuthContext).user;
  const { dispatch } = useContext(ChatContext);
  const navigation = useNavigation();

  async function handleSelect(user: User) {
    const combinedId =
      currentUser?.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(FIREBASE_DB, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(FIREBASE_DB, "chats", combinedId), { messages: [] });
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

      dispatch({ type: "CHANGE_USER", payload: user });
      navigation.navigate("Message");
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
  }

  function renderUser(item: User) {
    return (
      <UserContainer onPress={() => handleSelect(item)}>
        <UserImage source={{ uri: item?.photoURL }} />
        <UserName numberOfLines={1}>{item.displayName}</UserName>
      </UserContainer>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => renderUser(item)}
        style={{
          marginHorizontal: -SIZES.padding,
        }}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: SIZES.padding,
        }}
      />
    </Container>
  );
};

export default HeaderUserList;
