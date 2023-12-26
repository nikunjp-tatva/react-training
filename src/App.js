import React from "react";

import { GlobalProvider } from "./components/contexts/GlobalContext";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Login from "./pages/Login";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <GlobalProvider>
          <Login />
        </GlobalProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
