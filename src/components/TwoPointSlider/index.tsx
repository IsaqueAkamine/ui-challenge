import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS, SIZES } from "../../constants";

// import { Container } from './styles';

interface TwoPointSliderProps {
  values: number[];
  min: number;
  max: number;
  prefix: string;
  postfix: string;
  onValuesChange: (values: number[]) => undefined;
}

function TwoPointSlider({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange,
}: TwoPointSliderProps) {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.jobs.range,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.jobs.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.jobs.range,
                ...styles.shadow,
              }}
            />
            <Text
              style={{
                marginTop: 5,
                color: COLORS.userSecondary,
                fontSize: 16,
              }}
            >
              {prefix}
              {e.currentValue}
              {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={(values) => onValuesChange(values)}
    />
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});

export default TwoPointSlider;
