import { useMemo, useState } from "react";

import { GlobalContext } from "./components/contexts/GlobalContext";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Login from "./pages/Login";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const globalContext = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <AuthProvider> 
    <Provider store={store}>
      <GlobalContext.Provider value={globalContext}>
       < Login />
      </GlobalContext.Provider>
    </Provider>
    </AuthProvider>
  );
}

export default App;
