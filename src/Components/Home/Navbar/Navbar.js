import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="navbar-logo">
            <img src="./HomePhotos/Navbar/logo.png" alt="LOGO" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Residence"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Residences
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Event
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Download E-Brouchre
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
