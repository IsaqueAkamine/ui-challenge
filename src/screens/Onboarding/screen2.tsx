import { StyleSheet, Text, View } from "react-native";

export default function OnboardingScreen2() {
  return (
    <View style={styles.container}>
      <Text>Onboarding screen 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
