import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar-wrapper">
      <div className="nav-logo">
        <img src="./Awfficacy Logo 1.svg" alt="" />
      </div>
      <ul className="navbar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/who-we-are">Who we are</Link>
        </li>
        <li>
          <Link to="/what-we-do">What we do</Link>
        </li>
        <li>
          <Link to="/clientele">Clientele</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
