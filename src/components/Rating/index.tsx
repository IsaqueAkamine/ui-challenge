import React from "react";

import { Container } from "./rating.style";
import { COLORS, icons } from "../../constants";
import { Image, StyleSheet, ViewStyle } from "react-native";

interface RatingProps {
  rating: number;
  iconStyle?: ViewStyle;
  activeColor?: string;
  inactiveColor?: string;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
  iconStyle,
}) => {
  return (
    <Container>
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 1 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 2 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 3 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 4 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 5 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});

export default Rating;
