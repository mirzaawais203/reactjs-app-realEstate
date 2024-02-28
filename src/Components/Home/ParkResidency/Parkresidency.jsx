import React from "react";
import "./Parkresidency.css";
import { Link } from "react-router-dom";

const Parkresidency = () => {
  return (
    <div>
      <div className="parkresidency">
        <div className="parkresidency-top">
          <img src="./HomePhotos/ParkResidency/parkresidency.jpg" alt="building" />
        </div>
        <div className="parkresidency-bottom">
          <h3>WELCOME TO <br /> THE PARK RESIDENCE</h3>
          <p>
            The Park Residences by Gracia, a distinctive 7-story apartment building redefining urban living. Uniquely positioned, it is enveloped by parks on three sides, creating a harmonious blend of nature and modernity. The architectural masterpiece seamlessly fuses Egyptian and modern design, offering a visual delight. Inside, each apartment is a testament to high standard of living, ensuring a luxurious and comfortable lifestyle. Experience the epitome of unique living at The Park Residences,where nature, architecture, and comfort converge seamlessly.
          </p>
          <Link to="/About">READ MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default Parkresidency;
