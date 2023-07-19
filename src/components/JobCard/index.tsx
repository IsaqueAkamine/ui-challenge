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

interface JobProps {
  item: {
    id: number;
    title: string;
    experience: string;
    salary: string;
    companyName: string;
    location: string;
    icon: string;
  };
}

// function JobCard(data: JobProps) {
function JobCard(item: JobProps) {
  const invisionIcon = require("../../assets/images/SearchResults/invision.png");
  const notionIcon = require("../../assets/images/SearchResults/notion.png");
  const snapchatIcon = require("../../assets/images/SearchResults/snapchat.png");

  const { title, experience, salary, companyName, location, icon } = item.item;

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

  return (
    <Container>
      {/* TITLE/LIKE */}
      <HeaderCard>
        <Title>{title}</Title>
        <LikeIcon name="heart" size={24} />
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
