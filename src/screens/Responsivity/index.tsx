import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export default function Example() {
  return (
    <View style={styles.container}>
      <Text>Example screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "flex-end",
    paddingTop:
      Platform.OS === "ios" ? getStatusBarHeight() : StatusBar.currentHeight,
    paddingBottom: getBottomSpace(),
  },
});
