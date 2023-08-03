import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

import {
  AnimatedView,
  CardContainer,
  Container,
  DescriptionContainer,
  ImageContainer,
  LinearDescription,
  LinearImageContainer,
} from "./vertical-movie-skeleton.styles";

const VerticalMovieSkeleton: React.FC = () => {
  const translateX = useRef(new Animated.Value(-70)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 70,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, []);
  return (
    <Container>
      <CardContainer style={{ overflow: "hidden" }}>
        <ImageContainer style={{ overflow: "hidden" }}>
          <AnimatedView style={{ transform: [{ translateX: translateX }] }}>
            <LinearImageContainer
              colors={["transparent", "rgba(0,0,0,0.5)", "transparent"]}
              start={{ x: 1, y: 1 }}
            />
          </AnimatedView>
        </ImageContainer>
        <DescriptionContainer>
          <AnimatedView style={{ transform: [{ translateX: translateX }] }}>
            <LinearDescription
              colors={["transparent", "rgba(0,0,0,0.5)", "transparent"]}
              start={{ x: 1, y: 1 }}
            />
          </AnimatedView>
        </DescriptionContainer>
      </CardContainer>
    </Container>
  );
};

export default VerticalMovieSkeleton;
