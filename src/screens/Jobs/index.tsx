import React, { useState } from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useTranslation } from "react-i18next";

import { useJob } from "../../contexts/job";

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
  const { t } = useTranslation();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const { jobList } = useJob();

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
        <Title>{t("jobs.title")}</Title>
        <JobsFoundText>{jobList.length} {t("jobs.jobs-found")}</JobsFoundText>
      </TitleContainer>
    );
  }

  return (
    <Container>
      <Header
        iconColor={COLORS.searchResults.buttonBack}
        containerStyle={{ marginTop: 14, paddingHorizontal: 22 }}
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
        data={jobList}
        keyExtractor={(item) => `job-card-${item.id}`}
        renderItem={({ item }) => {
          return <JobCard {...item} />;
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
