import React, { useContext } from "react";

import { GlobalContext } from "../components/contexts/GlobalContext";

export default function Store() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <>
      <p>Using Context Current Theme: <b>{theme}</b> </p>
      <button
        onClick={() => {
          setTheme((theme) => (theme === "light" ? "dark" : "light"));
        }}
      >
        Change Theme
      </button>
    </>
  );
}
