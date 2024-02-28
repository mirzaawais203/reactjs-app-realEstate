import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <img src="./HomePhotos/footer/logo.png" alt="" />
            <p>
              Introducing Pakistan to an extravagant and Premium lifestyle, the
              most luxurious and tallest residential
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div>
            <p>Development Updates</p>
            <p>Careers</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Blogs</p>
          </div>
          <div className="footer-top-bottom">
            <Link to="https://www.facebook.com/thegraciapk" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="footer-bottom-icon" />
            </Link>
            <Link to="https://www.instagram.com/the.graciapk/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="footer-bottom-icon" />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/company/the-gracia">
              <FontAwesomeIcon icon={faLinkedin} className="footer-bottom-icon" />
            </Link>
            <Link target="_blank" to="/ContactUs">
              <FontAwesomeIcon icon={faEnvelope} className="footer-bottom-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 THE ARK Residences All Copyrights Reserved.</p>
        <p>UAN: (042) 111 777 021  gracia.pk.com</p>
      </div>
    </div>
  );
};

export default Footer;
