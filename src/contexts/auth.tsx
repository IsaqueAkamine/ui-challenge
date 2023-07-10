import React, { createContext, useState, useContext, useEffect } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";
import {
  getLoggedUser,
  removeLoggedUser,
  saveLoggedUser,
} from "../storages/AuthStorage";

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  viewedOnboarding: boolean;
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
  hideOnboarding: () => void;
  loading: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authData, setAuth] = useState<AuthData>();
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  function hideOnboarding() {
    setViewedOnboarding(true);
  }
  function setLoadingAppData(value: boolean) {
    setLoading(value);
  }

  async function loadLoggedUserFromStorage() {
    const loggedUser = await getLoggedUser();
    if (loggedUser) {
      setAuth(JSON.parse(loggedUser));
    }
    setLoading(false);
  }

  async function signIn(email: string, password: string) {
    try {
      const auth = await authService.signIn(email, password);
      setAuth(auth);
      await saveLoggedUser(JSON.stringify(auth));

      return auth;
    } catch (error: any) {
      Alert.alert(error.message, "Tente novamente");
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
    await removeLoggedUser();
    return;
  }

  useEffect(() => {
    loadLoggedUserFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        viewedOnboarding,
        hideOnboarding,
        authData,
        signIn,
        signOut,
        loading,
        setLoadingAppData,
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
