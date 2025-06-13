import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  return (
    <>
      <header>
        <div className="head_div">
          <div className="img_div">
            <img src="./images/allinial_logo.png" alt="Allinial Logo" />
          </div>
          <div className="link-font-size">
            <p className="light-font-family">
              We are an Allinial Global network member
            </p>
          </div>
          <div className="learn_more link-font-size">
            <Link to="/learn-more">
              <p>Learn More</p>
            </Link>
          </div>
        </div>
        <div className="header-wrapper">
          <nav className="navbar-wrapper navbar-horizontal">
            <div className="nav-logo">
              <Link to="/">
                <img src="./images/Awfficacy Logo 1.svg" alt="Awfficacy Logo" />
              </Link>
            </div>
            <ul className="navbar">
              <li className="link-font-size">
                <Link to="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link to="/who-we-are">
                  <p>Who we are</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link to="/what-we-do">
                  <p>What we do</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link to="/clientele">
                  <p>Clientele</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link to="/careers">
                  <p>Careers</p>
                </Link>
              </li>
              <li className="relative">
                <div
                  className="dropdown link-font-size"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <p>Group Companies</p>
                  <span className="material-symbols-outlined">
                    {isDropdownOpen
                      ? "keyboard_arrow_up"
                      : "keyboard_arrow_down"}
                  </span>
                </div>
                <div
                  className={`dropdown-container ${
                    isDropdownOpen ? "dropdown-active" : ""
                  }`}
                >
                  <div className="link-font-size dropdown-item">
                    <Link to="https://www.awfficacyglobal.com/" target="_blank">
                      <p>Awfficacy Global</p>
                    </Link>
                  </div>
                  <div className="link-font-size dropdown-item">
                    <Link to="https://www.awfficacy.capital/" target="_blank">
                      <p>Awfficacy Capital</p>
                    </Link>
                  </div>
                  <div className="link-font-size dropdown-item">
                    <Link to="https://www.scaleax.com/" target="_blank">
                      <p>ScaleAx</p>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="btn">
              <Link to="/contact">
                <div className="contact-button">
                  <p>Contact Us</p>
                  <div className="arrow-svg">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_115_36)">
                        <path
                          d="M0.317005 8.02907L17.2622 0.665957C17.3593 0.623773 17.4669 0.61178 17.5708 0.631536C17.6748 0.651293 17.7705 0.701886 17.8453 0.776734C17.9202 0.851581 17.9707 0.94722 17.9905 1.05121C18.0102 1.1552 17.9982 1.26272 17.9561 1.3598L10.5929 18.3051C10.55 18.404 10.4777 18.4873 10.3859 18.5439C10.2941 18.6004 10.1872 18.6275 10.0795 18.6214C9.97183 18.6153 9.86863 18.5763 9.78379 18.5098C9.69896 18.4432 9.63656 18.3523 9.60502 18.2491L8.02609 13.0866C7.84686 12.4991 7.52597 11.9647 7.09167 11.5304C6.65736 11.0961 6.12295 10.7752 5.53548 10.596L0.372938 9.01703C0.269812 8.98549 0.178833 8.9231 0.112265 8.83826C0.0456963 8.75342 0.00673676 8.65021 0.000642776 8.54254C-0.00545311 8.43487 0.0216064 8.32793 0.0781746 8.23611C0.134741 8.1443 0.218098 8.07204 0.317005 8.02907Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_115_36">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="matrix(-1 0 0 1 18 0.622223)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </nav>
          <div className="mob-header">
            <div className="nav-logo">
              <Link to="/">
                <img src="./images/Awfficacy Logo 1.svg" alt="Awfficacy Logo" />
              </Link>
            </div>
            <div
              className="menu_btn"
              onClick={() => {
                setIsMobNavOpen(true);
              }}
            >
              <div className="container">
                <div className={`toggle ${isMobNavOpen ? "active" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <nav className={`navbar-mob ${isMobNavOpen ? "nav-active" : ""}`}>
            <div
              className="menu_btn"
              onClick={() => {
                setIsMobNavOpen(false);
              }}
            >
              <div className="container">
                <div className={`toggle ${isMobNavOpen ? "active" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="nav-logo">
              <Link to="/">
                <img src="./images/Awfficacy Logo 1.svg" alt="Awfficacy Logo" />
              </Link>
            </div>
            <div className="head_div">
              <div className="img_div">
                <img src="./images/allinial_logo.png" alt="Allinial Logo" />
              </div>
              <div className="link-font-size">
                <p className="light-font-family">
                  We are an Allinial Global network member
                </p>
              </div>
              <div className="learn_more link-font-size">
                <Link to="/learn-more">
                  <p>Learn More</p>
                </Link>
              </div>
            </div>
            <ul className="navbar">
              <li className="link-font-size">
                <Link
                  to="/home"
                  onClick={() => {
                    setIsMobNavOpen(false);
                  }}
                >
                  <p>Home</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link
                  to="/who-we-are"
                  onClick={() => {
                    setIsMobNavOpen(false);
                  }}
                >
                  <p>Who we are</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link
                  to="/what-we-do"
                  onClick={() => {
                    setIsMobNavOpen(false);
                  }}
                >
                  <p>What we do</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link
                  to="/clientele"
                  onClick={() => {
                    setIsMobNavOpen(false);
                  }}
                >
                  <p>Clientele</p>
                </Link>
              </li>
              <li className="link-font-size">
                <Link
                  to="/careers"
                  onClick={() => {
                    setIsMobNavOpen(false);
                  }}
                >
                  <p>Careers</p>
                </Link>
              </li>
              <li
                className="relative"
                style={{ width: "100%", background: "#FFFFFF" }}
              >
                <div
                  className="dropdown link-font-size"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <p>Group Companies</p>
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
                <div
                  className={`dropdown-container ${
                    isDropdownOpen ? "dropdown-active" : ""
                  }`}
                >
                  <div className="link-font-size dropdown-item">
                    <Link
                      to="https://www.awfficacyglobal.com/"
                      onClick={() => {
                        setIsMobNavOpen(false);
                      }}
                    >
                      <p>Awfficacy Global</p>
                    </Link>
                  </div>
                  <div className="link-font-size dropdown-item">
                    <Link
                      to="https://www.awfficacy.capital/"
                      onClick={() => {
                        setIsMobNavOpen(false);
                      }}
                    >
                      <p>Awfficacy Capital</p>
                    </Link>
                  </div>
                  <div className="link-font-size dropdown-item">
                    <Link
                      to="https://www.scaleax.com/"
                      onClick={() => {
                        setIsMobNavOpen(false);
                      }}
                    >
                      <p>ScaleAx</p>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="btn">
              <Link
                to="/contact"
                onClick={() => {
                  setIsMobNavOpen(false);
                }}
              >
                <div className="contact-button">
                  <p>Contact Us</p>
                  <div className="arrow-svg">
                    <img src="./images/arrow.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </nav>
          <hr
            style={{
              width: "90%",
              borderColor: "#002565",
              borderWidth: "1px",
              border: "none",
              // background: "#005dff",
              background: "#002565",
              height: "0.01rem",
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
