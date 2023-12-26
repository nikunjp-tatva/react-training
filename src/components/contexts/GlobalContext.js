import React, { createContext, useState, useContext, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "./GlobalContext.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const globalContext = useMemo(
    () => ({ isDarkMode, setIsDarkMode }),
    [isDarkMode, setIsDarkMode]
  );

  return (
    <GlobalContext.Provider value={globalContext}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <div className="theme-toggle-button-container">
        <button
          className={`theme-toggle-button ${isDarkMode ? "dark-mode" : ""}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        </div>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalProvider);
