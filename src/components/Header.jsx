import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [isMobNavOpen]);

  return (
    <>
      <header>
        <div className="head_div">
          <div className="img_div">
            <img src="./images/allinial_logo.png" alt="Allinial Logo" />
          </div>
          <div className="link-font-size">
            <p>We are an Allinial Global network member</p>
          </div>
          <div className="learn_more link-font-size">
            <Link href="/learn-more">
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
            <Link href="/">
              <img src="./images/Awfficacy Logo 1.svg" alt="Awfficacy Logo" />
            </Link>
          </div>
          <div className="navbar-horizontal">
            <ul className="navbar ">
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
                <Link to="/What_we_do">
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
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-container">
                    <div className="link-font-size dropdown-item">
                      <Link href="/awfficacy-global">
                        <p>Awfficacy Global</p>
                      </Link>
                    </div>
                    <div className="link-font-size dropdown-item">
                      <Link href="/awfficacy-capital">
                        <p>Awfficacy Capital</p>
                      </Link>
                    </div>
                    <div className="link-font-size dropdown-item">
                      <Link href="/scaleAx">
                        <p>ScaleAx</p>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <div className="btn">
              <Link href="/contact">
                <div className="contact-button">
                  Contact Us
                  <div className="arrow-svg">
                    <img src="./images/arrow.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {isMobNavOpen && (
            <nav className="navbar-mob">
              <div className="nav-logo">
                <Link href="/">
                  <img
                    src="./images/Awfficacy Logo 1.svg"
                    alt="Awfficacy Logo"
                  />
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
                  <Link to="/What_we_do">
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
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  </div>
                  {isDropdownOpen && (
                    <div className="dropdown-container">
                      <div className="link-font-size dropdown-item">
                        <Link href="/awfficacy-global">
                          <p>Awfficacy Global</p>
                        </Link>
                      </div>
                      <div className="link-font-size dropdown-item">
                        <Link href="/awfficacy-capital">
                          <p>Awfficacy Capital</p>
                        </Link>
                      </div>
                      <div className="link-font-size dropdown-item">
                        <Link href="/scaleAx">
                          <p>ScaleAx</p>
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
              <div className="btn">
                <Link href="/contact">
                  <div className="contact-button">
                    Contact Us
                    <div className="arrow-svg">
                      <img src="./images/arrow.svg" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            </nav>
          )}
        </nav>

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
                  keyboard_arrow_down
                </span>
              </div>
              {isDropdownOpen && (
                <div className="dropdown-container">
                  <div className="link-font-size dropdown-item">
                    <Link href="/awfficacy-global">
                      <p>Awfficacy Global</p>
                    </Link>
                  </div>
                  <div className="link-font-size dropdown-item">
                    <Link href="/awfficacy-capital">
                      <p>Awfficacy Capital</p>
                    </Link>
                  </div>
                  <div className="link-font-size dropdown-item">
                    <Link href="/scaleAx">
                      <p>ScaleAx</p>
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <div className="btn">
            <Link href="/contact">
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
            <Link href="/">
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
                  <Link href="/awfficacy-global">
                    <p>Awfficacy Global</p>
                  </Link>
                </div>
                <div className="link-font-size dropdown-item">
                  <Link href="/awfficacy-capital">
                    <p>Awfficacy Capital</p>
                  </Link>
                </div>
                <div className="link-font-size dropdown-item">
                  <Link href="/scaleAx">
                    <p>ScaleAx</p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="btn">
            <Link href="/contact">
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
