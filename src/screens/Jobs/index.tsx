import React from "react";
import { COLORS } from "../../colors";

import Header from "../../components/Header";

import {
  Container,
  FilterButton,
  FilterButtonIcon,
  FilterButtonText,
  JobsFoundText,
  Title,
  TitleContainer,
} from "./jobs.styles";

function Jobs() {
  console.log("teste");
  const filterIcon = require("../../assets/images/SearchResults/filtericon.png");
  function HeaderRightButton() {
    return (
      <FilterButton>
        <FilterButtonText>Filters</FilterButtonText>
        <FilterButtonIcon source={filterIcon} resizeMode="contain" />
      </FilterButton>
    );
  }

  return (
    <Container>
      <Header
        iconColor={COLORS.searchResults.buttonBack}
        conteinerStyle={{ marginTop: 14 }}
        rightButton={HeaderRightButton}
      />
      <TitleContainer>
        <Title>Product Designers</Title>
        <JobsFoundText>32 job founds</JobsFoundText>
      </TitleContainer>
    </Container>
  );
}

export default Jobs;
