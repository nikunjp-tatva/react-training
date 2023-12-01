import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EX5 from "./pages/EX5";
import Home from "./pages/Home";
import Functional from "./pages/Functional";
import Class from "./pages/Class";
import StateProps from "./pages/StateProps";
import NavBar from "./components/functional/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/functional" element={< Functional />} />
          <Route path="/class" element={< Class />} />
          <Route path="/state-props" element={< StateProps />} />
          <Route path="/ex-5" element={< EX5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
