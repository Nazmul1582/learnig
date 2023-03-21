import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          {/* to="/about"   to="about" are same
          <Link to="about">About</Link>  */}
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li className="servicesMenu">
          <Link to="/services">Services</Link>
          <ul className="dropdown">
            <li>
              <Link className="nested" to="/services/web-dev">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="nested" to="/services/app-dev">
                App Development
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
