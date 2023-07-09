import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  const [activeLink,setActiveLink] = useState(null);
  const handleClick = (index) => {
    setActiveLink(index);
  }

  return (
    <nav className="gym_navbar">
      <div className="nav_container">
        <Link to="/" className="navbar__logo">
          <a className="navbar-brand" href="#">
         <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
          </a>
          Gym Website
        </Link>
        <ul className="navbar__links">
          <li className="navbar__item " >
            <Link to="/"  className="navbar__link" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/Services" className={`navbar__link ${activeLink === 0 ? "activate" : ""}`} onclick = {() => handleClick(0)}>
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/About" className="navbar__link">
              About Us
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/BMI" className="navbar__link">
              BMI Calculator
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/Contact" className="navbar__link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
