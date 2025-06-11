import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
    </nav>
  </header>
);

export default Header;
