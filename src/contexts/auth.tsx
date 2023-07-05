import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";

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

  function hideOnboarding() {
    setViewedOnboarding(true);
  }

  async function signIn(email: string, password: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, password);
      setAuth(auth);
      return auth;
    } catch (error: any) {
      Alert.alert(error.message, "Tente novamente");
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
    return;
  }

  return (
    <AuthContext.Provider
      value={{ viewedOnboarding, hideOnboarding, authData, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
