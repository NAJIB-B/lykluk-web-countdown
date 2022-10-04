import { NavLink, Outlet, useLocation } from "react-router-dom";
import {useContext} from "react";
import {Context} from "../Context"

const Header = () => {

  let activeClass = {
    color: "#8e00fe",
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/">
            <img
              src="./images/lykluk_logo.svg"
              alt="lykluk logo"
              className="logo-img"
            />
          </NavLink>
        </div>
        <nav className="nav">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink
                to="/"
                style={({ isActive, isPending }) =>
                  isActive ? activeClass : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                style={({ isActive, isPending }) =>
                  isActive ? activeClass : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                style={({ isActive, isPending }) =>
                  isActive ? activeClass : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
