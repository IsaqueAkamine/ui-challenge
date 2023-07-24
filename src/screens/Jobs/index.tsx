import React, { useState } from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { JobProvider } from "../../contexts/job";

import JobList from "./JobList";

import Header from "../../components/Header";
import JobCard from "../../components/JobCard";
import FilterModal from "./FilterModal";
import { COLORS } from "../../constants/colors";

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
  const [showFilterModal, setShowFilterModal] = useState(false);

  const filterIcon = require("../../assets/images/SearchResults/filtericon.png");

  function HeaderRightButton() {
    return (
      <FilterButton onPress={() => setShowFilterModal(true)}>
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
    <JobProvider>
      <Container>
        <Header
          iconColor={COLORS.searchResults.buttonBack}
          conteinerStyle={{ marginTop: 14, paddingHorizontal: 22 }}
          rightButton={HeaderRightButton}
        />

        {showFilterModal && (
          <FilterModal
            isVisible={showFilterModal}
            onClose={() => setShowFilterModal(false)}
          />
        )}

        <JobFlatlist
          showsVerticalScrollIndicator={false}
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
    </JobProvider>
  );
}

export default Jobs;
