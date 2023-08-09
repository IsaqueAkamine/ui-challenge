import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  EffectCallback,
} from "react";
import { Unsubscribe, User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

import {
  getLoggedUser,
  removeLoggedUser,
  saveLoggedUser,
} from "../storages/AuthStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface AuthContextData {
  viewedOnboarding: boolean;
  user: User | null;
  signIn: (user: User) => {};
  logOut: () => {};
  hideOnboarding: () => void;
  loading: boolean;
  loadingApiData: boolean;
  setLoadingApiData: (value: boolean) => any;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingApiData, setLoadingApiData] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  function hideOnboarding() {
    setViewedOnboarding(true);
  }

  function setLoadingAppData(value: boolean) {
    setLoading(value);
  }

  async function loadLoggedUserFromStorage() {
    const loggedUser = await getLoggedUser();
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
    setLoading(false);
  }

  async function signIn(user: User) {
    setUser(user);
    await saveLoggedUser(JSON.stringify(user));
  }

  async function logOut(): Promise<void> {
    await AsyncStorage.removeItem("@viewedOnboarding");
    await removeLoggedUser();
    signOut(auth);
    return;
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, setUser);
    return subscriber;
  }, []);

  useEffect(() => {
    loadLoggedUserFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        viewedOnboarding,
        hideOnboarding,
        user,
        signIn,
        logOut,
        loading,
        setLoadingAppData,
        loadingApiData,
        setLoadingApiData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
