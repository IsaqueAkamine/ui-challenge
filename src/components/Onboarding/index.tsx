import React, { useState, useRef } from "react";
import { FlatList, Animated, View } from "react-native";
import { slides } from "./slides";
import {
  ButtonContainer,
  ButtonNavigate,
  Container,
  Description,
  GroupScreens,
  ItemContent,
  Title,
} from "./onboarding-style";
import OnboardingItem from "./OnboardingItem";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // const _viewabilityConfig = useRef({
  //   viewAreaCoveragePercentThreshold: 60,
  // });

  return (
    <Container>
      <ItemContent>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </ItemContent>
 
      {/* <Title>Products you love</Title>
      <Description>
        Grow your business by accepting card payments with a new card reader
      </Description> */}

      {/* <GroupScreens />
      <ButtonContainer>
        <ButtonNavigate>
          <NextIcon />
        </ButtonNavigate>
      </ButtonContainer> */}
    </Container>
  );
}
