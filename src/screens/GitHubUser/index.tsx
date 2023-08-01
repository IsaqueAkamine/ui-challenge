import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/auth";

import Header from "../../components/Header";
import UserRepositories from "./UserRepositories";
import UserData from "./UserData";

import apiGithub from "../../services/apiGitHub";

import {
  Container,
  FollowButton,
  FollowButtonText,
  Image,
  UserDataContainer,
  UserDescription,
  UserLocation,
  UserName,
} from "./githubuser.styles";

interface UserDataProps {
  name: string;
  bio: string;
  location: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface UserReposProps {
  name: string;
  description: string;
  url?: string;
  language?: string;
}

export default function GitHubUserScreen() {
  const { loadingApiData, setLoadingApiData } = useAuth();
  const [userData, setUserData] = useState<UserDataProps>();
  const [userRepos, setUserRepos] = useState<[UserReposProps]>();
  const { t } = useTranslation();
  const url = "/users/isaqueakamine"; // TODO input text to find github user
  const urlRepos = "https://api.github.com/users/isaqueakamine/repos";

  const abortController = new AbortController();
  async function getUserData() {
    await apiGithub
      .get(url, { signal: abortController.signal })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error: any) => {
        console.log("Api response error: ", error.message);
        Alert.alert(error.message, t("notifications.Fail to fetch data"));
      });
  }

  async function getUserRepos() {
    await apiGithub
      .get(urlRepos, { signal: abortController.signal })
      .then((res) => {
        setUserRepos(res.data);
      })
      .catch((error: any) => {
        console.log("Api response error: ", error.message);
        Alert.alert(error.message, t("notifications.Fail to fetch data"));
      });
  }

  function fetchUserData() {
    setLoadingApiData(true);
    Promise.all([getUserData(), getUserRepos()])
      .then(() => {
        setLoadingApiData(false);
      })
      .catch((error) => {
        setLoadingApiData(false);
        if (abortController.signal.aborted) {
          console.log("Data fetching cancelled");
        } else {
          // Handle error
        }
      })
      .finally(() => {
        setLoadingApiData(false);
      });
  }

  useEffect(() => {
    fetchUserData();
    return () => abortController.abort("Data fetching cancelled");
  }, []);

  if (loadingApiData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Container>
      <Header iconColor="#405572" containerStyle={{ marginTop: 14 }} />
      <Image
        source={{ uri: userData?.avatar_url }}
        style={{ resizeMode: "contain" }}
      />
      <UserName>{userData?.name}</UserName>
      <UserDescription>{userData?.bio}</UserDescription>
      <UserLocation>{userData?.location}</UserLocation>

      <FollowButton>
        <FollowButtonText>Follow</FollowButtonText>
      </FollowButton>

      <UserDataContainer>
        <UserData title="Repositories" value={userData?.public_repos || 0} />
        <UserData title="Followers" value={userData?.followers || 0} />
        <UserData title="Following" value={userData?.following || 0} />
      </UserDataContainer>

      {userRepos && (
        <FlatList
          style={{ marginTop: 24 }}
          data={userRepos}
          renderItem={({ item }) => <UserRepositories {...item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />
      )}
    </Container>
  );
}
