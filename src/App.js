import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EX5 from "./pages/EX5";
import Home from "./pages/Home";
import Functional from "./pages/Functional";
import Class from "./pages/Class";
import StateProps from "./pages/StateProps";
import NavBar from "./components/functional/NavBar";
import UserDetails from "./pages/UserDetails";
import EX2_1 from "./pages/EX2_1";
import FormComponent from "./components/form/FormComponent";
import EX2_2 from "./pages/EX2_2";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/functional" element={<Functional />} />
          <Route path="/class" element={<Class />} />
          <Route path="/state-props" element={<StateProps />} />
          <Route path="/ex-5" element={<EX5 />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/ex-2.1" element={<EX2_1 />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/ex-2.2" element={<EX2_2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
