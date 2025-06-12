import React from "react";
import "../styles/What-we-do.css";

const What_we_do = () => {
  return (
    <>
      <div className="awfficacy_wrapper">
        <div className="section-1 main-container section-padding-4rem">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_56 yellow-color fw_700">What We Do</h1>
            </div>
            <div className="awfficacy_blue_box_img">
              <img src="images/what_we_do/Single 01.svg" alt="single" />
            </div>
          </div>
        </div>
        <div className="section-2 main-container section-padding-4rem pt0">
          <div className="grid-two">
            <div className="leftside">
              <p className="fw_400 font_28">
                We assist corporates to unleash the best of potential from the
                available government schemes including Production Linked
                Incentive (PLI) schemes, other central government schemes, and
                state incentive schemes; providing end-to-end assistance
                spanning across application filing to receival of incentives.
              </p>
            </div>
            <div className="rightside">
              <img src="images/what_we_do/Mask group.png" alt="group image" />
            </div>
          </div>
        </div>
        <div className="section-3 main-container section-padding-4rem pt0">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_40 yellow-color fw_700">
                Central Government incentive schemes
              </h1>
            </div>
            <div className="awfficacy_blue_box_img">
              <img src="images/what_we_do/Group (1).svg" alt="single" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default What_we_do;
