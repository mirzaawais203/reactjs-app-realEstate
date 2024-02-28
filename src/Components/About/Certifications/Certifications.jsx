import "./Certifications.css";

const Certifications = () => {
  return (
    <div>
      <div className="certifications">
        <h3>OUR PARTNERS</h3>
        <div className="certifications-img">
          <img src="./AboutPhotos/OurCertifications/ourpartners1.png" alt="" />
          <img src="./AboutPhotos/OurCertifications/ourpartners2.png" alt="" />
          <img src="./AboutPhotos/OurCertifications/ourpartners3.png" alt="" />
          <img src="./AboutPhotos/OurCertifications/ourpartners4.png" alt="" />

        </div>
      </div>
      <div className="discover-park">
        <h3>DISCOVER <br />THE PARK RESIDENCES</h3>
        <div className="discover-park-content">
          <div className="discover-park-top">
            <div>
              <img src="./AboutPhotos/OurCertifications/1.png" alt="" />
              <p>GYM</p>
            </div>
            <div>
              <img src="./AboutPhotos/OurCertifications/2.png" alt="" />
              <p>COFFEE SHOP</p>
            </div>
            <div>
              <img src="./AboutPhotos/OurCertifications/3.png" alt="" />
              <p>SAUNA</p>
            </div>
            <div>
              <img src="./AboutPhotos/OurCertifications/4.png" alt="" />
              <p>24/7 ELECTRICTY</p>
            </div>
          </div>
          <div className="discover-park-bottom">
            <div>
              <img src="./AboutPhotos/OurCertifications/5.png" alt="" />
              <p>PARK ON ALL SIDES</p>
            </div>
            <div>
              <img src="./AboutPhotos/OurCertifications/6.png" alt="" style={{ width: '60px' }} />
              <p>ELEVATOR</p>
            </div>
            <div>
              <img src="./AboutPhotos/OurCertifications/7.png" alt="" />
              <p>SMART APPARTMENTS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="residence-location">
        <h3>OUR LOCATION</h3>
        <div className="residence-location-img">
          <div>
            <img src="./AboutPhotos/OurCertifications/location1.webp" alt="" />
          </div>
          <div>
            <img src="./AboutPhotos/OurCertifications/location2.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
