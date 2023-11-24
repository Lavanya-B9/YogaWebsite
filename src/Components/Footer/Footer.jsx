import React from "react";
import "./Footer.css";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer">
        <div className="column">
          <h5>yoga classes</h5>
          <ul className="footer-ul">
            <li>vinyasa</li>
            <li> Hatha</li>
            <li>yin</li>
            <li>spiritual</li>
            <li>ashtanga</li>
            <li>aeriel</li>
            <li>iyenger</li>
          </ul>
        </div>
        <div className="column">
          <h5>meditations</h5>
          <ul className="footer-ul">
            <li>sleep better</li>
            <li> reduce stress</li>
            <li>morning meditation</li>
          </ul>
        </div>

        <div className="column">
          <h5>Pranayama</h5>
          <ul className="footer-ul">
            <li>calming</li>
            <li> energizing</li>
            <li>reduce stress</li>
          </ul>
        </div>
        <div className="column">
          <h5>articles</h5>
          <ul className="footer-ul">
            <li>practise</li>
            <li> yoga therapy</li>
            <li>ayurveda</li>
            <li>poses</li>
            <li>for teachers</li>
            <li>tutorials</li>
          </ul>
        </div>

        <div className="column">
          <h5>more</h5>
          <ul className="footer-ul">
            <li>courses</li>
            <li> challenges</li>
            <li>docs & films</li>
            <li>our teachers</li>
            <li>premium trainings</li>
            <li>podcasts</li>
          </ul>
        </div>

        <div className="column">
          <h5>about</h5>
          <ul className="footer-ul">
            <li>need help?</li>
            <li> careers</li>
            <li>privacy policy</li>
            <li>terms of service</li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <AiFillInstagram className="icon" />
        <AiFillGoogleCircle className="icon" />
        <AiFillYoutube className="icon" />
        <AiFillTwitterCircle className="icon" />
        <BsFacebook className="icon" />
      </div>
    </div>
  );
};

export default Footer;
