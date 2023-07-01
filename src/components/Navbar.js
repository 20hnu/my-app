import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
<nav className="gym_navbar">
    <div className="nav_container">
        <Link to="/" className="navbar__logo">
          Gym Website
          </Link>
        <ul className="navbar__links">
            <li className="navbar__item"><Link to="/" className="navbar__link">Home</Link></li>
            <li className="navbar__item"><Link to="/Services" className="navbar__link">Services</Link></li>
            <li className="navbar__item"><Link to="/About" className="navbar__link">About Us</Link></li>
            <li className="navbar__item"><Link to="/BMI" className="navbar__link">BMI Calculator</Link></li>
            <li className="navbar__item"><Link to="/Contact" className="navbar__link">Contact Us</Link></li>
        </ul>
    </div>
</nav>
  );
};

export default Navbar;

