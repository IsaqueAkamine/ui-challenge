import React from "react";

import {
  CompanyContainer,
  CompanyInfoContainer,
  CompanyLocation,
  CompanyLocationContainer,
  CompanyName,
  Container,
  ExperienceContainer,
  ExperienceText,
  ExperienceTextContainer,
  HeaderCard,
  LikeIcon,
  LogoContainer,
  LogoImg,
  PinIcon,
  SalaryText,
  Title,
} from "./job-card.style";

const JobCard: React.FC = () => {
  const invisionIcon = require("../../assets/images/SearchResults/invision.png");
  // const notionIcon = require("../../assets/images/SearchResults/notion.png");
  // const snapchatIcon = require("../../assets/images/SearchResults/snapchat.png");
  return (
    <Container>
      {/* TITLE/LIKE */}
      <HeaderCard>
        <Title>Senior Product Designers</Title>
        <LikeIcon name="heart" size={24} />
      </HeaderCard>

      {/* EXPERIENCE/SALARY */}
      <ExperienceContainer>
        <ExperienceTextContainer>
          <ExperienceText>Experience: 2 yrs</ExperienceText>
        </ExperienceTextContainer>
        <SalaryText>$80 - $120K/ year</SalaryText>
      </ExperienceContainer>
      {/* COMPANY DESCRIPTION */}
      <CompanyContainer>
        <LogoContainer>
          <LogoImg source={invisionIcon} />
        </LogoContainer>

        <CompanyInfoContainer>
          <CompanyName>InVision</CompanyName>
          <CompanyLocationContainer>
            <PinIcon name={"map-pin"} size={24} />
            <CompanyLocation>Remote</CompanyLocation>
          </CompanyLocationContainer>
        </CompanyInfoContainer>
      </CompanyContainer>
    </Container>
  );
};

export default JobCard;
