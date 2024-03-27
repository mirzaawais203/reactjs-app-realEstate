import React from "react";
import "./Residenceplan.css";
// import { Link } from "react-router-dom";

const Residenceplan = () => {
  return (
    <div>
      <div className="residenceplan">
        <div>
          <h3>RESIDENCE PLAN</h3>
        </div>
        <div className="residenceplan-top">
          <div className="residenceplan-1bed residenceplan-img">
            <div className="residenceplan-top-headings">
              <p>1 BED ROOM</p>
              <img src="./HomePhotos/ResidencePlan/1.jpg" alt="" />
            </div>
            <div className="residenceplan-top-content">
              <p>BEDROOM 1</p>
              <p>BATHROOM 1</p>
              <p>KITCHENETTE 1</p>
              <p>LOUNGE 1</p>
            </div>
            </div>
            <div className="residenceplan-studio residenceplan-img">
            <div className="residenceplan-top-headings">
            <p>2 BED ROOM</p>
            <img src="./HomePhotos/ResidencePlan/2.jpg" alt="" />
            </div>
            <div className="residenceplan-top-content">
            <p>BEDROOM 2</p>
            <p>BATHROOM 2</p>
            <p>KITCHENETTE 1</p>
            <p>LOUNGE 1</p>
            </div>
            </div>
            <div className="residenceplan-2bed residenceplan-img">
            <div className="residenceplan-top-headings">
            <p>PENTHOUSE</p>
            <img src="./HomePhotos/ResidencePlan/3.jpg" alt="" style={{width:"250px"}}/>
            </div>
            <div className="residenceplan-top-content">
            <p>BEDROOM 3</p>
            <p>BATHROOM 3</p>
            <p>KITCHENETTE 1</p>
            <p>LOUNGE 1</p>
            </div>
            </div>
            </div>
            <div className="residenceplan-top">
            <div className="residenceplan-1bed residenceplan-img">
            <div className="residenceplan-top-headings">
            <p>1 BEDROOM</p>
            <img src="./HomePhotos/ResidencePlan/4.jpg" alt="" />
            </div>
            <div className="residenceplan-top-content">
            <p>BEDROOM 1</p>
              <p>BATHROOM 1</p>
              <p>KITCHENETTE 1</p>
              <p>LOUNGE 1</p>
            </div>
            </div>
            <div className="residenceplan-studio residenceplan-img">
            <div className="residenceplan-top-headings">
            <p>2 BEDROOM</p>
            <img src="./HomePhotos/ResidencePlan/5.jpg" alt="" style={{width:'300px'}}/>
            </div>
            <div className="residenceplan-top-content">
            <p>BEDROOM 2</p>
            <p>BATHROOM 2</p>
            <p>KITCHENETTE 1</p>
            <p>LOUNGE 1</p>
            </div>
            </div>
            <div className="residenceplan-2bed residenceplan-img">
            <div className="residenceplan-top-headings">
            <p>PENTHOUSE</p>
            <img src="./HomePhotos/ResidencePlan/6.jpg" alt="" />
            </div>
            <div className="residenceplan-top-content">
            <p>BEDROOM 3</p>
            <p>BATHROOM 3</p>
            <p>KITCHENETTE 1</p>
            <p>LOUNGE 1</p>
            </div>
            </div>
            </div>
            </div>
            <div className="location">
            <h3>LOCATION</h3>
            <div className="location-map">
            <iframe
            title="unique"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2752.119694482084!2d74.17663624723231!3d31.389800177891736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffa85b28bc51%3A0xa30d66a6ca0eca0d!2sBahria%20Springs%20Park!5e1!3m2!1sen!2s!4v1710742404799!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "35px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
            </div>
            );
          };
          
          export default Residenceplan;
          
          // import React from 'react'
          
          // const Residenceplan = () => {
            //   return (
              //     <div>
              //       <div className="residenceplan-top">
              //         <div className="residenceplan-1bed residenceplan-img" 
              //         style={{display:'flex', flexDirection:'column', alignItems:"center", gap:'2vw'}}>
              //           <div className="residenceplan-top-headings" 
              //           style={{display:'flex', flexDirection:'column', alignItems:"center", justifyContent:'space-between'}}>
              //             <p>1 Bed Room</p>
              //             <img src="./HomePhotos/ResidencePlan/1.png" alt="" style={{width:'200px', height:'300px',paddingTop:'100px'}}/>
              //             <p>BEDROOM 1</p>
              //             <p>KITCHENETTE 1</p>
              //             <p>LOUNGE 1</p>
              //             <p>TOTAL AREA / SQFT 424</p>
              //           </div>
              //           <div className="residenceplan-top-content">
              //             <Link to="/">DOWNLOAD PLAN</Link>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   )
              // }
              
              // export default Residenceplan
              // <Link to="/">DOWNLOAD PLAN</Link>
              // <Link to="/">DOWNLOAD PLAN</Link>
              // <Link to="/">DOWNLOAD PLAN</Link>
              // <Link to="/">DOWNLOAD PLAN</Link>
              // <Link to="/">DOWNLOAD PLAN</Link>
              // <Link to="/">DOWNLOAD PLAN</Link>