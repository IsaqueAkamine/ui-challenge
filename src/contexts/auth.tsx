import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB, auth } from "../services/firebaseConfig";

import {
  getLoggedUser,
  removeLoggedUser,
  saveLoggedUser,
} from "../storages/AuthStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface UserProps extends User {
  username?: string;
}
interface AuthContextData {
  viewedOnboarding: boolean;
  user: UserProps | null;
  signIn: (user: User) => {};
  logOut: () => {};
  hideOnboarding: () => void;
  loading: boolean;
  loadingUserData: boolean;
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
  const [loadingUserData, setLoadingUserData] = useState(true);
  const [user, setUser] = useState<UserProps | null>(null);

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

  async function signIn(user: UserProps) {
    setUser(user);
    await saveLoggedUser(JSON.stringify(user));
  }

  async function logOut(): Promise<void> {
    // await AsyncStorage.removeItem("@viewedOnboarding");
    await removeLoggedUser();
    signOut(auth);
    return;
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      onSnapshot(doc(FIREBASE_DB, `users/${user?.uid}`), (doc) => {
        setUser({ ...user, username: doc.data().username });
      });

      setLoadingUserData(false);
    });

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
        loadingUserData,
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
