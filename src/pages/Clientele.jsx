import React from "react";
import "../styles/Clientele.css";
import { Link } from "react-router";

const Clientele = () => {
  return (
    <>
      <div className="awfficacy_wrapper">
        <div className="clientele-wrapper">
          <div className="section-1 main-container section-padding-4rem">
            <div className="awfficacy_blue_box alc j-c-sb">
              <div className="awfficacy_blue_box_heading">
                <h1 className="font_56 white-color fw_700">Credibility & Trust</h1>
              </div>
              <div className="clientele_us-img">
                <img src="images/Clientele-img.svg" alt="Clientele" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientele;
