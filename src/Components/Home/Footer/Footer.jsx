import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <img src="./HomePhotos/footer/logo.png" alt="logo" />
          <p>
            Introducing Pakistan to an extravagant and Premium lifestyle, the
            most luxurious and tallest residential
          </p>
        </div>
        <div className="footer-mid">
          <div>
            <img src="./HomePhotos/footer/aro.png" alt="aro" />
            <Link to="/">Home</Link>
          </div>
          <div>
            <img src="./HomePhotos/footer/aro.png" alt="aro" />
            <Link to="/About">About</Link>
          </div>
          <div>
            <img src="./HomePhotos/footer/aro.png" alt="aro" />
            <Link to="/Residence">Residences</Link>
          </div>
          <div>
            <img src="./HomePhotos/footer/aro.png" alt="aro" />
            <Link to="/ContactUs">Contact</Link>
          </div>
          <div>
            <img src="./HomePhotos/footer/aro.png" alt="aro" />
            <Link to="/Event">Events</Link>
          </div>
          <div>
            <img src="./HomePhotos/footer/aro.png" alt="aro" />
            <Link to="/DownloadE-Broucher">Download E-Brochure</Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-top">
            <label htmlFor="contact">Conatct us on:</label>
            <input type="email" name="" id="contact" placeholder="Enter Your Email......" />
          </div>
          <div className="footer-right-bottom">
            <p>Follow us on:</p>
            <Link to="https://www.facebook.com/thegraciapk" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="footer-bottom-iconF" />
            </Link>
            <Link to="https://www.instagram.com/the.graciapk/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="footer-bottom-icon" />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/company/the-gracia">
            <FontAwesomeIcon icon={faLinkedinIn} className="footer-bottom-icon" />
            </Link>
            <Link target="_blank" to="/ContactUs">
            <FontAwesomeIcon icon={faEnvelope} className="footer-bottom-icon"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 THE ARK Residences All Copyrights Reserved,Designed by <Link>Hilighter</Link> </p>
        <p>UAN: (042) 111 777 021  gracia.pk.com</p>
      </div>
    </div>
  );
};

export default Footer;
