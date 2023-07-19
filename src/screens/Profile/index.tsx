import React from "react";
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

export default function ProfileScreen() {
  const image = require("../../assets/images/profile-img.jpg");
  return (
    <Container>
      <Header iconColor="#405572" conteinerStyle={{ marginTop: 14 }} />
      <Image source={image} style={{ resizeMode: "contain" }} />
      <UserName>John Doe</UserName>
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
