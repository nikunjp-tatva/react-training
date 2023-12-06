import React, { useContext } from "react";

import { GlobalContext } from "../GlobalContext";

export default function Store() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <>
      <div>Theme: {theme}</div>
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
