import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="navbar-logo">
            <img src="./HomePhotos/Navbar/logo.png" alt="LOGO" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Residence"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Residences
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
            to="https://drive.google.com/file/d/1HZ9D78OZbOfNQI5mQlCR6Lwizy6DTId9/view?usp=sharing"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                target="_blank"
              >
                Download E-Brochure
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
    </div>
  );
}

export default NavBar;






            // <li className="nav-item">
            //   <NavLink
            //     to="/"
            //     activeclassname="active"
            //     className="nav-links"
            //     onClick={handleClick}
            //   >
            //     Event
            //   </NavLink>
            // </li>