import React from "react";

import { useAuth } from "../components/contexts/AuthContext";
import RouterComponent from "../components/functional/RouterComponent";
import LoginForm from "../components/form/LoginForm";
import "./Login.css";

const Login = () => {
  const { isLoggedIn, login, logout, loggedInUserDetails } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <>
          <div className="welcome-section">
            <h3>
              Welcome <b className="welcome-color">{loggedInUserDetails?.name}</b>
            </h3>
            <button onClick={logout}>Log Out</button>
          </div>
          <RouterComponent />
        </>
      ) : (
        <>
          <LoginForm loginHandler={login} />
        </>
      )}
    </div>
  );
};

export default Login;
