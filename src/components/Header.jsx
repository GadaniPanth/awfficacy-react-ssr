import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
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
      </div>
      <nav className="navbar-wrapper">
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
          <li>
            <div className="dropdown link-font-size">
              <p>Group Companies</p>
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

export default Header;
