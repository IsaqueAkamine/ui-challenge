import React, { useContext } from "react";
import Header from "../../components/Header";
import SocialData from "./SocialData";

import {
  Container,
  FollowButton,
  FollowButtonText,
  Image,
  SocialDataContainer,
  UserDescription,
  UserLocation,
  UserName,
} from "./profile.styles";
import { AuthContext } from "../../contexts/auth";

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Header iconColor="#405572" containerStyle={{ marginTop: 14 }} />
      <Image
        source={{ uri: user?.photoURL }}
        style={{ resizeMode: "contain" }}
      />
      <UserName>{user?.displayName}</UserName>
      <UserDescription>Visual Designer and Photographer</UserDescription>
      <UserLocation>London, UK</UserLocation>

      <FollowButton>
        <FollowButtonText>Follow</FollowButtonText>
      </FollowButton>

      <SocialDataContainer>
        <SocialData title="Photos" value={758} />
        <SocialData title="Followers" value={938} />
        <SocialData title="Follows" value={878} />
      </SocialDataContainer>
    </Container>
  );
}
