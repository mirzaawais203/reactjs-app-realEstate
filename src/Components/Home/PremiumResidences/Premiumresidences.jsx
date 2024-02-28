import React from "react";
import "./Premiumresidences.css";
import { Link } from "react-router-dom";

const PremiumResidences = () => {
  return (
    <div>
      <div className="premiumresidency">

        <div className="premiumresidency-top">
          <h3>THE ONLY PREMIUM RESIDENCES IN THE TOWN</h3>
        </div>

        <div className="premiumresidency-bottom">
          <div>
            <img src="./HomePhotos/PremiumResidences/premium1.jpg" alt="" className="premiumresidency-bottom-img" />
            <img src="./HomePhotos/PremiumResidences/hover.jpg" alt="" className="premiumresidency-bottom-hover-img" />
            <p>1 Bed Room</p>
            <Link to="/">Explore More</Link>
          </div>
          <div>
            <img src="./HomePhotos/PremiumResidences/premium2.jpg" alt="" className="premiumresidency-bottom-img premiumresidency-bottom-2img" />
            <img src="./HomePhotos/PremiumResidences/hover.jpg" alt="" className="premiumresidency-bottom-hover-img" />
            <p>2 Bed Room</p>
            <Link to="/">Explore More</Link>
          </div>
          <div>
            <img src="./HomePhotos/PremiumResidences/premium3.jpg" alt="" className="premiumresidency-bottom-img" />
            <img src="./HomePhotos/PremiumResidences/hover.jpg" alt="" className="premiumresidency-bottom-hover-img" />

            <p>3 Bed Room</p>
            <Link to="/">Explore More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumResidences;
