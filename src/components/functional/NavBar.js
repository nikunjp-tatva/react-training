import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: #333;
  }

  li {
    position: relative;
    padding: 10px 20px;
    text-align: center;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content > a {
    color: #333;
  }
  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }

  a:hover {
    color: #ffd700;
  }

  .active {
    color: #ffd700;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/state-props" activeClassName="active">State-Props</NavLink>
          </li>
          <li>
            <NavLink to="/userDetails" activeClassName="active">User Details</NavLink>
          </li>
          <li>
            <NavLink to="/form" activeClassName="active">Simple Form</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/components" activeClassName="active">Components</NavLink>
            <div className="dropdown-content">
              <NavLink to="/components/functional" activeClassName="active"> 
                Functional <br />
              </NavLink>
              <NavLink to="/components/class" activeClassName="active">
                Class <br />
              </NavLink>
              <NavLink to="/components/higher-order" activeClassName="active">Higher Order</NavLink>
            </div>
          </li>
          <li className="dropdown">
            <NavLink to="/exercises" activeClassName="active">Exercise</NavLink>
            <div className="dropdown-content">
              <NavLink to="/exercises/ex-2.1" activeClassName="active">
                Exercise 2.1 <br />
              </NavLink>
              <NavLink to="/exercises/ex-2.2" activeClassName="active">
                Exercise 2.2 <br />
              </NavLink>
              <NavLink to="/exercises/ex-3.3" activeClassName="active">
                Exercise 3.3 <br />
              </NavLink>
              <NavLink to="/exercises/ex-5" activeClassName="active">Exercise 5</NavLink>
            </div>
          </li>
          <li className="dropdown">
            <NavLink to="/stores" activeClassName="active">Stores</NavLink>
            <div className="dropdown-content">
              <NavLink to="/stores/global" activeClassName="active">
                Global Store <br />
              </NavLink>
              <NavLink to="/stores/redux" activeClassName="active">Redux Store</NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </Nav>
  );
};

export default NavBar;
