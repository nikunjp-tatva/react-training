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
          <Link to="/ex-2">Exercise 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
