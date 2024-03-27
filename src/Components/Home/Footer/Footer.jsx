import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import PopUpModel from '../Navbar/PopUpModel'

const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <img src="./HomePhotos/Footer/logo.png" alt="logo" />
          <p>
            Gracia, Beyond Luxury, It's a Lifestyle.
          </p>
        </div>
        <div className="footer-mid">
          <div>
            <img src="./HomePhotos/Footer/aro.png" alt="aro" />
            <Link to="/">Home</Link>
          </div>
          <div>
            <img src="./HomePhotos/Footer/aro.png" alt="aro" />
            <Link to="/About">About</Link>
          </div>
          <div>
            <img src="./HomePhotos/Footer/aro.png" alt="aro" />
            <Link to="/Residence">Residences</Link>
          </div>
          <div>
            <img src="./HomePhotos/Footer/aro.png" alt="aro" />
            <Link to="/ContactUs">Contact</Link>
          </div>
          <div>
            <img src="./HomePhotos/Footer/aro.png" alt="aro" />
            <Link rel="noopener noreferrer" onClick={() => setShowModal(true)}>Download E-Brochure</Link>
            {showModal && <PopUpModel onClose={() => setShowModal(false)} />}

          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-top">
            <label htmlFor="contact">Conatct us on:</label>
            <p style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "400" }}>
            UAN:
            <span style={{ fontSize: "13px", fontWeight: "600", color: "white" }}>
              0311 1100 564
            </span>
          </p>
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
              <FontAwesomeIcon icon={faEnvelope} className="footer-bottom-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 GRACIA PARK Residences All Copyrights Reserved,Designed by <Link to='https://hilighter.co/' target="_blank">Hilighter</Link> </p>
        
      </div>
    </div>
  );
};

export default Footer;

// <div>
//   <img src="./HomePhotos/Footer/aro.png" alt="aro" />
//   <Link to="/Event">Events</Link>
// </div>