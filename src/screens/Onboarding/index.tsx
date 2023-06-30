import { StyleSheet, Text, View } from "react-native";

import OnboardImage1 from "../../assets/images/onboardingImg1.svg";

export default function OnboardingScreen1() {
  return (
    <View style={styles.container}>
      <OnboardImage1 />
      <Text>Products you love</Text>
      <Text>Grow your business by accepting card payments with a new card reader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
