import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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
  onClose: () => undefined;
}

function FilterModal({ isVisible, onClose }: FilterModalProps) {
  const { width, height } = Dimensions.get("window");
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [roleTag, setRoleTag] = useState(0);

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
            onValuesChange={(values) => console.log(values)}
          />
        </SalaryRangeContainer>
      </Section>
    );
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
                  backgroundColor:
                    item.id == roleTag
                      ? COLORS.jobs.primary
                      : COLORS.jobs.range,
                }}
                onPress={() => setRoleTag(item.id)}
              >
                <TagButtonText
                  style={{
                    color:
                      item.id == roleTag ? COLORS.white : COLORS.loginGray5,
                  }}
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

          <ApplyButton>
            <ApplyButtonText>Apply filter</ApplyButtonText>
          </ApplyButton>
        </Animated.View>
      </Container>
    </ModalContainer>
  );
}

export default FilterModal;
