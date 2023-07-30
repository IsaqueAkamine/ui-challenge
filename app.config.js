export default ({ config }) => ({
  ...config,
  ios: {
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
    },
  },
});
