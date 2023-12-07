import React, { createContext, useState, useContext, useMemo } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserDetails, setLoggedInUserDetails] = useState(null);

  const login = (values) => {
    setLoggedInUserDetails(values);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoggedInUserDetails(null);
  };
  const authContext = useMemo(
    () => ({ isLoggedIn, login, logout, loggedInUserDetails }),
    [isLoggedIn, loggedInUserDetails]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
