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
        <div className="section-3 main-container section-padding-4rem pt0">
          <div className="gold-box">
            <div className="leadership">
              <div className="head">
                <h2 className="gold-text">Leadership</h2>
                <h2>Building a Strong Foundation</h2>
              </div>
              <div className="flex-row j-c-sb">
                <div className="card card-hover">
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/gautam_pai.png"
                      alt="Gautam Pai"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name">Gautam Pai</h2>
                          <h3 className="designation">Founder & CEO</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-hover">
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/pranav_shukla.png"
                      alt="Pranav Shukla"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name">Pranav Shukla</h2>
                          <h3 className="designation">Founder & MD</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-hover">
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/nikita_talati.png"
                      alt="Nikita Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name">Nikita Talati</h2>
                          <h3 className="designation">Director</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="advisors">
              <div className="head">
                <h2 className="gold-text">Our Advisors</h2>
                <h2>TRUSTED EXPERTS FOR GUIDANCE</h2>
              </div>
              <div className="flex-row j-c-sb">
                <div className="card card-hover">
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/aniket_talati.png"
                      alt="Aniket Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name">Aniket Talati</h2>
                          <h3 className="designation">Strategic Advisor</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-hover">
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/sunil_talati.png"
                      alt="Sunil Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name">Sunil Talati</h2>
                          <h3 className="designation">Mentor</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-hover">
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/umesh_talati.png"
                      alt="Umesh Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name">Umesh Talati</h2>
                          <h3 className="designation">Mentor</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who_we_are;
