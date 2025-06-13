import React, { useEffect, useState } from "react";
import "../styles/Who-we-are.css";
import { Link } from "react-router";

const Who_we_are = () => {
  return (
    <>
      <div className="whoWeAre-wrapper">
        <div className="section-1 main-container section-padding-4rem">
          <div className="relative">
            <div className="awfficacy_blue_box alc j-c-sb">
              <div className="awfficacy_blue_box_heading">
                <h1 className="font_56 white-color fw_700">
                  Turning Vision into Value, <br className="hidden-xs" />
                  Challenges into Opportunities.
                </h1>
              </div>
              <div className="awfficacy_blue_box_img">
                <img src="./images/who-we-are/who-we-are.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 main-container section-padding-4rem pt0">
          <div className="blue-box inner-flex inner-flex-medium">
            <div className="head">
              <h1>Who we are</h1>
            </div>
            <div className="body">
              <p>
                Awfficacy was born out of the sheer passion and purpose to
                become an integral part of the mission to support India's dream
                of becoming a global manufacturing hub. With a dynamic pair of
                our founders, we root ourselves in their intention to
                meaningfully contribute to the Indian economy through promotions
                of fresh investments in different sectors by way of providing
                niche advisory services in the realms of PLI schemes as well as
                other central and state incentive schemes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who_we_are;
