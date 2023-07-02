import React from "react";
import { useWindowDimensions } from "react-native";
import { Container, Dot } from "./paginator-style";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return <Dot key={i.toString()} style={{ width: dotWidth, opacity }} />;
      })}
    </Container>
  );
}
