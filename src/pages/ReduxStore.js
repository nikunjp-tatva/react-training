import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/Slice/themeSlice";

export default function ReduxStore() {
  const themeValue = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <p>
        Using Redux Current theme is: <b>{themeValue}</b>{" "}
      </p>
      <button onClick={handleChangeTheme}>Change Theme</button>
    </>
  );
}
