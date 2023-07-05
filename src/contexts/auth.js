import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [viewedOnboarding, setViewedOnboarding] = useState();

  function hideOnboarding() {
    setViewedOnboarding(true);
  }

  return (
    <AuthContext.Provider value={{ viewedOnboarding, hideOnboarding }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
