import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import JobList from "./JobList";

import Header from "../../components/Header";
import JobCard from "../../components/JobCard";
import { COLORS } from "../../colors";

import {
  Container,
  FilterButton,
  FilterButtonIcon,
  FilterButtonText,
  JobFlatlist,
  JobsFoundText,
  Title,
  TitleContainer,
} from "./jobs.style";

function Jobs() {
  const filterIcon = require("../../assets/images/SearchResults/filtericon.png");
  function HeaderRightButton() {
    return (
      <FilterButton>
        <FilterButtonText>Filters</FilterButtonText>
        <FilterButtonIcon source={filterIcon} resizeMode="contain" />
      </FilterButton>
    );
  }

  function ListHeader() {
    return (
      <TitleContainer>
        <Title>Product Designers</Title>
        <JobsFoundText>32 job founds</JobsFoundText>
      </TitleContainer>
    );
  }

  return (
    <Container>
      <Header
        iconColor={COLORS.searchResults.buttonBack}
        conteinerStyle={{ marginTop: 14, paddingHorizontal: 22 }}
        rightButton={HeaderRightButton}
      />

      <JobFlatlist
        ListHeaderComponent={ListHeader}
        data={JobList}
        keyExtractor={(item) => `job-card-${item.id}`}
        renderItem={({ item }) => {
          return <JobCard item={item} />;
        }}
        contentContainerStyle={{
          gap: 25,
          paddingBottom: getBottomSpace(),
        }}
      />
    </Container>
  );
}

export default Jobs;
