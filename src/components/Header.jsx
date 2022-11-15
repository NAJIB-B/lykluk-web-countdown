import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../Context";

const Header = () => {
  const navRef = useRef();

  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(() => false);

  const { screenSize } = useContext(Context);
  let activeClass = {
    color: "#8e00fe",
  };

  const addShowNav = () => {
    setShowNav((prev) => true);
    navRef.current.classList.add("nav-show");
  };

  const removeShowNav = () => {
    setShowNav((prev) => false);
    navRef.current.classList.remove("nav-show");
  };

  const hamburger = !showNav ? (
    <svg
      onClick={addShowNav}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="#8e00fe" />
    </svg>
  ) : (
    <svg
      onClick={removeShowNav}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </svg>
  );

  return (
    <header
      className="header py-4"
      // style={{
      //   paddingTop: pathname === "/contact" ? "0" : "1em",
      // }}
    >
      <div className="container header-container">
        <div className="logo z-40">
          <NavLink to="/" onClick={removeShowNav}>
            <img
              src="./images/logo.svg"
              alt="lykluk logo"
              className="logo-img lg:w-28 relative -left-6"
            />
          </NavLink>
        </div>
        <nav className="nav z-40">
          <ul
            className={"nav-items"}
            // style={ styles }
            ref={navRef}
          >
            <li className="nav-item">
              <NavLink
                to="/"
                style={({ isActive, isPending }) =>
                  isActive ? activeClass : undefined
                }
                end
                onClick={removeShowNav}
              >
                Coming Soon
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                style={({ isActive, isPending }) =>
                  isActive ? activeClass : undefined
                }
                onClick={removeShowNav}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/privacy-policy"
                style={({ isActive, isPending }) =>
                  isActive ? activeClass : undefined
                }
                onClick={removeShowNav}
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
          <div
            className="hamburger"
            style={{ display: screenSize < 962 ? "block" : "none" }}
          >
            {screenSize < 968 && hamburger}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
