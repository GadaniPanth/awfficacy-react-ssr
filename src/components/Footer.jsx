import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-container relative">
          <div className="footer">
            <div className="bg-img">
              <img src="./images/footer_bg.svg" alt="Footer BG" />
            </div>
            <div className="content-wrapper">
              <div className="upper_div flex-row j-c-sb als">
                <div className="logo">
                  <img src="./images/AWF_white_logo.svg" alt="Awfficacy Logo" />
                </div>
                <div className="resources">
                  <div className="sec-head">
                    <p className="fw_bold">Resources</p>
                  </div>
                  <ul className="inner-flex inner-18-gap">
                    <li>
                      <Link to="/home">
                        <p>Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/who-we-are">
                        <p>Who we are</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/what-we-do">
                        <p>What we do</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/clientele">
                        <p>Clientele</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="contact">
                  <div className="sec-head">
                    <p className="fw_bold">Contact</p>
                  </div>
                  <ul className="inner-flex inner-18-gap">
                    <li>
                      <Link to="tel:+91-8320174373">
                        <img src="./images/call.svg" alt="" />
                        <p>+91-8320174373</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:hello@awfficacy.com">
                        <img src="./images/glob.svg" alt="" />
                        <p>hello@awfficacy.com</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.google.com/maps/place/Talati+%26+Talati+LLP/data=!4m2!3m1!1s0x0:0x7cd204b70c1cff0a?sa=X&ved=1t:2428&ictx=111&cshid=1749736271955015">
                        <img src="./images/location.svg" alt="" />
                        <p>
                          Ambica Chambers, Nr. Old High Court, Ahmedabad, India
                          - 380009
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="follow-company hr-div">
                  <div className="company">
                    <div className="sec-head">
                      <p className="fw_bold">Group Companies</p>
                    </div>
                    <div className="flex-row g42">
                      <div className="company_logo">
                        <Link
                          to={"https://www.awfficacyglobal.com/"}
                          target="_blank"
                        >
                          <img
                            src="./images/AWF_white_logo.svg"
                            alt="Awfficacy Logo"
                          />
                        </Link>
                      </div>
                      <div className="company_logo">
                        <Link
                          to={"https://www.awfficacy.capital/"}
                          target="_blank"
                        >
                          <img
                            src="./images/AWF-Cap-white.svg"
                            alt="Awfficacy Capital"
                          />
                        </Link>
                      </div>
                      <div className="company_logo">
                        <Link to={"https://www.scaleax.com/"} target="_blank">
                          <img src="./images/Scaleax.svg" alt="ScaleAx" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="follow">
                    <div className="sec-head">
                      <p className="fw_bold">Follow Us</p>
                    </div>
                    <div className="sec-body">
                      <p>Hit the below to find any new update.</p>
                    </div>
                    <div className="connections flex-row g18">
                      <Link to={""}>
                        <img src="./images/fb.svg" alt="Facebook" />
                      </Link>
                      <Link to={""}>
                        <img src="./images/ins.svg" alt="Instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_div flex-row j-c-sb">
                <div className="copyright">
                  <p>Copyright © 2025 Awfficacy </p>
                </div>
                <div className="dnd-by">
                  <Link to="https://www.saltpixels.in/">
                    <p>Designed and Developed by @Salt Pixels</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
