import React from "react";
import "./About.css";
import AboutImg1 from "../../assets/yogaImg9.avif";
import AboutImg2 from "../../assets/yogaImg7.webp";

const About = () => {
  return (
    <div id="about-container">
      <div className="top">
        <h1>Why join always live yoga?</h1>
        <p>
          everyday for hours , we follow wrong postures for sleeping,
          sittong,walking. our mind is stressed out for many reasons.
        </p>
        <p>
          doing yoga and meditation can counter this damage and prevent problems
          from getting bigger.
        </p>
        <p>
          we bring you highly qualified trainers. take a personal or group
          classes and make lifelong habit to be yoga fit.
        </p>
      </div>
      <div className="bottom">
        <div className="about-image">
          <img src={AboutImg1} alt="about-img" />
          <img src={AboutImg2} alt="about-img" />
        </div>
        <div className="about-content">
          <h5>benefits of yoga</h5>
          <ul className="benefits">
            <li>wake up energized</li>
            <li>find calmness </li>
            <li>build strength</li>
            <li>sharpen focus</li>
            <li>increase flexibility</li>
            <li>increase mobility</li>
            <li>support longevity</li>
            <li>live balanced</li>
            <li>get deeper sleep</li>
            <li>healthy lifestyle</li>
            <li>stress free life</li>
          </ul>
        </div>
      </div>
      <p className="para">
        Yoga Offers a powerful solution for every facet of your life - from
        physical wellness to emotional well-being, as well as guidance on living
        a fulfilling and meaningful life.{" "}
      </p>
    </div>
  );
};

export default About;
