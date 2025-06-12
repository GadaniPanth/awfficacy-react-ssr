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
          <div
            className="menu_btn"
            onClick={() => {
              setIsMobNavOpen(!isMobNavOpen);
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
                  {isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
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
                Contact Us
                <div className="arrow-svg">
                  <img src="./images/arrow.svg" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </nav>
        <nav className={`navbar-mob ${isMobNavOpen ? "nav-active" : ""}`}>
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
            <li className="relative" style={{ width: "100%" }}>
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
                  <Link to="/awfficacy-global">
                    <p>Awfficacy Global</p>
                  </Link>
                </div>
                <div className="link-font-size dropdown-item">
                  <Link to="/awfficacy-capital">
                    <p>Awfficacy Capital</p>
                  </Link>
                </div>
                <div className="link-font-size dropdown-item">
                  <Link to="/scaleAx">
                    <p>ScaleAx</p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="btn">
            <Link to="/contact">
              <div className="contact-button">
                Contact Us
                <div className="arrow-svg">
                  <img src="./images/arrow.svg" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </nav>
        <hr
          style={{ width: "90%", borderColor: "#002565", borderWidth: "1px" }}
        />
      </header>
    </>
  );
};

export default Header;
