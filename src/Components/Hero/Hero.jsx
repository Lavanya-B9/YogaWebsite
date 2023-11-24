import React from "react";
import "./Hero.css";
import Img1 from "../../assets/yogaImg1.webp";

const Hero = () => {
  return (
    <div id="hero-container">
      <div className="hero-img">
        <img src={Img1} alt="hero-img" />
      </div>
      <div className="hero-content">
        <h1>Yoga For Better Life</h1>
        <p>
          practice with world class teachers in the comfort of your home with
          our online and offline yoga and meditation classes and programs.
        </p>
        <button>join now</button>
      </div>
    </div>
  );
};

export default Hero;
