import React from "react";

import { useAuth } from "../components/contexts/AuthContext";
import RouterComponent from "../components/functional/RouterComponent";
import LoginForm from "../components/form/LoginForm";

const Login = () => {
  const { isLoggedIn, login, logout, loggedInUserDetails } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div>
            <p>
              Welcome <b>{loggedInUserDetails?.name}</b>
            </p>
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
