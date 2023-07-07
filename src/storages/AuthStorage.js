import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "@UI-CHALLENGE:user-key";
export const saveLoggedUser = async (value) =>
  await AsyncStorage.setItem(USER_KEY, value);
export const getLoggedUser = async () => await AsyncStorage.getItem(USER_KEY);
export const removeLoggedUser = async () =>
  await AsyncStorage.removeItem(USER_KEY);
