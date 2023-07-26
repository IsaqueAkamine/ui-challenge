import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useJob } from "../../contexts/job";

import Section from "../../components/Section";
import TwoPointSlider from "../../components/TwoPointSlider";
import { COLORS, role } from "../../constants";

import {
  ApplyButton,
  ApplyButtonText,
  CloseButton,
  CloseButtonIcon,
  Container,
  FilterHeaderContainer,
  ModalContainer,
  SalaryRangeContainer,
  TagButton,
  TagButtonText,
  TagsContainer,
  Title,
} from "./filter-modal.style";

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function FilterModal({ isVisible, onClose }: FilterModalProps) {
  const { roleListSelected, changeRoleListSelected, filterJobByRole } =
    useJob();
  const { width, height } = Dimensions.get("window");
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - height * 0.52],
  });

  function renderSalaryRange() {
    return (
      <Section title="Salary range">
        <SalaryRangeContainer>
          <TwoPointSlider
            values={[60, 120]}
            min={50}
            max={200}
            prefix="$"
            postfix="k"
            onValuesChange={(values: number[]) => console.log(values)}
          />
        </SalaryRangeContainer>
      </Section>
    );
  }

  function handleSelectedRole(id: number) {
    changeRoleListSelected(id);
  }

  function handleFilter() {
    filterJobByRole();
    setShowFilterModal(false);
  }

  function findRoleSelected(id: number) {
    return roleListSelected.find((item) => item == id);
  }

  function selectedRoleBackgroundColor(id: number) {
    const color = findRoleSelected(id)
      ? COLORS.jobs.primary
      : COLORS.jobs.range;
    return color;
  }

  function selectedRoleTextColor(id: number) {
    const color = findRoleSelected(id) ? COLORS.white : COLORS.loginGray5;
    return color;
  }

  function renderTags() {
    return (
      <Section title="Tags" containerStyle={{ marginTop: 40 }}>
        <TagsContainer>
          {role.map((item: { id: number; label: string }, index: number) => {
            return (
              <TagButton
                key={`role-${index}`}
                style={{
                  backgroundColor: selectedRoleBackgroundColor(item.id),
                }}
                onPress={() => handleSelectedRole(item.id)}
              >
                <TagButtonText
                  style={{ color: selectedRoleTextColor(item.id) }}
                >
                  {item.label}
                </TagButtonText>
              </TagButton>
            );
          })}
        </TagsContainer>
      </Section>
    );
  }

  return (
    <ModalContainer animationType="fade" transparent={true} visible={isVisible}>
      <Container>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: 24,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: "#FFF",
          }}
        >
          {/* Header */}
          <FilterHeaderContainer>
            <Title>Filter your jobs</Title>
            <CloseButton onPress={() => setShowFilterModal(false)}>
              <CloseButtonIcon name="x-circle" size={24} />
            </CloseButton>
          </FilterHeaderContainer>

          {/* Salary Range */}
          {renderSalaryRange()}

          {/* Tags */}
          {renderTags()}

          <ApplyButton onPress={handleFilter}>
            <ApplyButtonText>Apply filter</ApplyButtonText>
          </ApplyButton>
        </Animated.View>
      </Container>
    </ModalContainer>
  );
}

export default FilterModal;
