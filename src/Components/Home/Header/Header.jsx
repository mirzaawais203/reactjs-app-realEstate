import React from "react";
import "./Header.css";

const header = () => {
  return (
    <div>
      <div className="header-top">
        <div className="header">
          <div className="header-content">
            <h3>YOUR HOME IN THE PARK</h3>
            <p>
              Residential Apartments Located In The Heart of Bahria Town, Lahore.
            </p>
          </div>
        </div>
      </div>
      <div className="headermobileview">
        <div className="headermobileview-img">
          <img src="./HomePhotos/Header/header.jpg" alt="building" />
        </div>
        <div className="headermobileview-content">
            <h3>YOUR HOME <br />IN THE PARK</h3>
            <p>
              Residential Apartments Located In The Heart of Bahria Town, Lahore.
            </p>
          </div>
      </div>
    </div>
  );
};

export default header;
