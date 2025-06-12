import React from "react";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="awfficacy_wrapper">
      <div className="section-1 main-container section-padding-4rem">
        <div className="relative">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_56 white-color">
                Building awesome office <br />
                with efficacy
              </h1>
            </div>
            <div className="awfficacy_blue_box_img">
              <img src="./landingPage.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 main-container section-padding-4rem">
        <div className="grid-two">
          <div className="section-2-left">
            <div className="section-2-img-details flex-row">
              <img src="./images/Awfficacy Logo 1.svg" alt="Awfficacy Logo" />
              <button>
                <p>Know More</p>
              </button>
            </div>
          </div>
          <div className="section-2-right">
            <div className="section-2-img-details flex-row">
              <img src="./global.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
