import { useMemo, useState } from "react";


import { GlobalContext } from "./components/contexts/GlobalContext";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import RouterComponent from "./components/functional/RouterComponent";

function App() {
  const [theme, setTheme] = useState("dark");
  const globalContext = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <Provider store={store}>
      <GlobalContext.Provider value={globalContext}>
       < RouterComponent />
      </GlobalContext.Provider>
    </Provider>
  );
}

export default App;
