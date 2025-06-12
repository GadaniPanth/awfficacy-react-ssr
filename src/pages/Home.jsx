import React from "react";
import "../styles/Landing.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="awfficacy_wrapper">
      <div className="section-1 main-container section-padding-4rem">
        <div className="relative">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_56 white-color fw_700">
                A United Approach <br />
                for Reinventing Your Business
              </h1>
            </div>
            <div className="awfficacy_blue_box_img">
              <img src="./landingPage.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
