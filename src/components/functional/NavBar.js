import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/functional">Functional Component</Link>
        </li>
        <li>
          <Link to="/class">Class Component</Link>
        </li>
        <li>
          <Link to="/state-props">State-Props</Link>
        </li>
        <li>
          <Link to="/ex-5">Exercise</Link>
        </li>
        <li>
          <Link to="/userDetails">User Details</Link>
        </li>
        <li>
          <Link to="/ex-2.1">Exercise 2.1</Link>
        </li>
        <li>
          <Link to="/form">Simple Form</Link>
        </li>
        <li>
          <Link to="/ex-2.2">Exercise 2.2</Link>
        </li>
        <li>
          <Link to="/global-store">Global Store</Link>
        </li>
        <li>
          <Link to="/redux-store">Redux Store</Link>
        <li>
          <Link to="/ex-3.3">Exercise 3.3</Link>
        </li>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
