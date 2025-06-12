import React from "react";
import "../styles/Landing.css";
import { Link } from "react-router";

const Landing = () => {
  return (
    <div className="awfficacy_wrapper">
      <div className="section-1 main-container section-padding-4rem">
        <div className="relative">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_56 white-color fw_700">
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
      <div className="section-2 main-container section-padding-4rem pt0">
        <div className="grid-two">
          <div className="section-2-left">
            <div className="inner-flex gap_spacing">
              <div className="section-2-img-details flex-row j-c-sb alc">
                <img src="./images/Awfficacy Logo 1.svg" alt="Awfficacy Logo" />
                <div className="btn-know_icon">
                  <Link to="/">
                    <div className="btn-know flex-row alc">
                      <p className="font_24 fw_bold"> Know More</p>
                      <div className="arrow-svg">
                        <span className="material-symbols-outlined">
                          near_me
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="section-2-heading_list inner-flex gap_spacing">
                <h2 className="font_32 fw_700">Make In India Advisory</h2>
                <div className="inner-flex gap_spacing">
                  <div className="inner-flex">
                    <p className="fw_bold font_24">
                      a. Central government schemes
                    </p>
                    <p className="fw_400 font_24">
                      (i) Production Linked Incentive (PLI) schemes
                    </p>
                    <p className="fw_400 font_24">
                      (ii) Other Central government schemes
                    </p>
                  </div>
                  <div className="state_paragraph">
                    <p className="fw_bold font_24">
                      b. State government schemes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-2-right">
            <div className="inner-flex gap_spacing">
              <div className="section-2-img-details flex-row j-c-sb alc">
                <img src="./global.svg" alt="global" />
                <div className="btn-know_icon">
                  <Link to="/">
                    <div className="btn-know flex-row alc">
                      <p className="font_24 fw_bold"> Know More</p>
                      <div className="arrow-svg">
                        <span className="material-symbols-outlined">
                          near_me
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="section-2-heading_list inner-flex gap_spacing">
                <h2 className="font_32 fw_700">Global Outsourcing</h2>
                <div className="inner-flex gap_spacing">
                  <div className="inner-flex">
                    <p className="fw_bold font_24">a. Countries</p>
                    <p className="fw_400 font_24">(i) Australia</p>
                    <p className="fw_400 font_24">(ii) United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3 main-container section-padding-4rem pt0">
        <div className="section-2-left">
          <div className="inner-flex gap_spacing">
            <div className="section-2-img-details flex-row j-c-sb alc">
              <img src="./images/AWF cap.svg" alt="Awfficacy Logo" />
              <div className="btn-know_icon">
                <Link to="/">
                  <div className="btn-know flex-row alc">
                    <p className="font_24 fw_bold"> Know More</p>
                    <div className="arrow-svg">
                      <span className="material-symbols-outlined">near_me</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="section-2-heading_list inner-flex gap_spacing">
              <h2 className="font_32 fw_700">Investment Banking</h2>
              <div className="grid-three">
                <div className="inner-flex">
                  <div className="inner-flex">
                    <p className="fw_bold font_24">
                      a. Corporate Finance Advisory
                    </p>
                    <p className="fw_400 font_24">(i) Due diligence</p>
                    <p className="fw_400 font_24">
                      (ii) Financial modelling & valuations
                    </p>
                    <p className="fw_400 font_24">(iii) IPO readiness</p>
                  </div>
                </div>
                <div className="inner-flex">
                  <div className="state_paragraph">
                    <p className="fw_bold font_24">b. Deal Management</p>
                    <p className="fw_400 font_24">(i) Fundraising advisory </p>
                    <p className="fw_400 font_24">
                      (ii) Transactional advisory
                    </p>
                  </div>
                </div>
                <p className="fw_bold font_24">c. Mutual Fund advisory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Landing;
