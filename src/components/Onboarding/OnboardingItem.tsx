import React from "react";
import { ImageSourcePropType, View, useWindowDimensions } from "react-native";
import { Content, Description, Image, Title } from "./onboarding-style";

interface ItemProps {
  id: string;
  title: string;
  description: string;
  // image: ImageSourcePropType;
}

// export default function OnboardingItem(item: ItemProps) {
export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }}>
      <Image source={item.image} style={{ width, resizeMode: "contain" }} />
      <Content>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Content>
    </View>
  );
}
