import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import EX5 from "../../pages/EX5";
import Home from "../../pages/Home";
import Functional from "../../pages/Functional";
import Class from "../../pages/Class";
import StateProps from "../../pages/StateProps";
import UserDetails from "../../pages/UserDetails";
import EX2_1 from "../../pages/EX2_1";
import FormComponent from "../form/FormComponent";
import EX2_2 from "../../pages/EX2_2";
import Store from "../../pages/Store";
import ReduxStore from "../../pages/ReduxStore";
import HRC from "./HRC";
import EX3_3 from "../../pages/EX3_3";

export default function RouterComponent() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/state-props" element={<StateProps />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/components/functional" element={<Functional />} />
          <Route path="/components/class" element={<Class />} />
          <Route path="/components/higher-order" element={<HRC />} />
          <Route path="/exercises/ex-2.1" element={<EX2_1 />} />
          <Route path="/exercises/ex-2.2" element={<EX2_2 />} />
          <Route path="/exercises/ex-3.3" element={<EX3_3 />} />
          <Route path="/exercises/ex-5" element={<EX5 />} />
          <Route path="/stores/global" element={<Store />} />
          <Route path="/stores/redux" element={<ReduxStore />} />
        </Routes>
      </div>
    </Router>
  );
}
