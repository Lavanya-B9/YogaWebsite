import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <div className="container">
      <div className="navbar">
        <h4>
          Yogi<span> Life</span>
        </h4>
        <ul className={clicked ? "ul" : "mobile-nav"}>
          <li>
            <Link onClick={() => setClicked(false)} to="hero-container">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setClicked(false)} to="about-container">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setClicked(false)} to="services-container">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={() => setClicked(false)} to="programs-container">
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setClicked(false)} to="footer-container">
              Contact Us
            </Link>
          </li>
        </ul>
        <div onClick={clickHandler}>
          {clicked ? (
            <AiOutlineClose className="bars" />
          ) : (
            <FaBars className="bars" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
