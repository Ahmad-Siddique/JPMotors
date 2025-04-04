import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Fetch credentials from .env file
  const storedUsername = process.env.REACT_APP_USERNAME;
  const storedPassword = process.env.REACT_APP_PASSWORD;

  const login = (username, password) => {
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      return true;  // Indicate success
    }
    return false;  // Indicate failure
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
