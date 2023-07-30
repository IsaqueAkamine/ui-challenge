// import { ExpoConfig, ConfigContext } from "expo/config";

const { ExpoConfig, ConfigContext } = require("expo/config");

const updateUrl = `https://u.expo.dev/${process.env.PROJECT_ID}`;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  ios: {
    bundleIdentifier: "com.akamine.uichallenge",
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
    },
  },
});
// // import { ExpoConfig, ConfigContext } from "expo/config";

// const { ExpoConfig, ConfigContext } = require("expo/config");

// const updateUrl = `https://u.expo.dev/${process.env.PROJECT_ID}`;

// export default ({ config }: ConfigContext): ExpoConfig => ({
//   ...config,
//   runtimeVersion: {
//     policy: "sdkVersion",
//   },
//   updates: {
//     url: updateUrl,
//   },
//   ios: {
//     bundleIdentifier: "com.akamine.uichallenge",
//     config: {
//       googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
//     },
//   },
// });
