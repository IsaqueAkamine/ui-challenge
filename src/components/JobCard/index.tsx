import React, { useState } from "react";

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

export interface JobProps {
  id: number;
  title: string;
  experience: string;
  salary: string;
  companyName: string;
  location: string;
  icon: string;
  isFavorite: boolean;
}

function JobCard(cardItem: JobProps) {
  const [card, setCard] = useState<JobProps>(cardItem);

  const invisionIcon = require("../../assets/images/SearchResults/invision.png");
  const notionIcon = require("../../assets/images/SearchResults/notion.png");
  const snapchatIcon = require("../../assets/images/SearchResults/snapchat.png");

  const {
    id,
    title,
    experience,
    salary,
    companyName,
    location,
    icon,
    isFavorite,
  } = card;

  function handleCompanyLogo(icon: string) {
    switch (icon) {
      case "invision":
        return invisionIcon;
      case "notion":
        return notionIcon;
      case "snapchat":
        return snapchatIcon;
      default:
        return invisionIcon;
    }
  }

  function handleToggleFavorite() {
    setCard((prevCard) => ({
      ...prevCard,
      isFavorite: !prevCard.isFavorite,
    }));
  }

  return (
    <Container>
      {/* TITLE/LIKE */}
      <HeaderCard>
        <Title>{title}</Title>
        <LikeIcon
          name={isFavorite ? "heart" : "heart-o"}
          size={24}
          onPress={() => handleToggleFavorite()}
        />
      </HeaderCard>

      {/* EXPERIENCE/SALARY */}
      <ExperienceContainer>
        <ExperienceTextContainer>
          <ExperienceText>Experience: {experience}</ExperienceText>
        </ExperienceTextContainer>
        <SalaryText>{salary}</SalaryText>
      </ExperienceContainer>
      {/* COMPANY DESCRIPTION */}
      <CompanyContainer>
        <LogoContainer>
          <LogoImg source={handleCompanyLogo(icon)} />
        </LogoContainer>

        <CompanyInfoContainer>
          <CompanyName>{companyName}</CompanyName>
          <CompanyLocationContainer>
            <PinIcon name={"map-pin"} size={24} />
            <CompanyLocation>{location}</CompanyLocation>
          </CompanyLocationContainer>
        </CompanyInfoContainer>
      </CompanyContainer>
    </Container>
  );
}

export default JobCard;
