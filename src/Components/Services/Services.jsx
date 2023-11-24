import React from "react";
import "./Services.css";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <div id="services-container">
      <h2>count the ways you can personalize your practice.</h2>
      <div className="services">
        {ServicesData.map((service) => {
          return (
            <div className="service">
              <span>{service.count}</span>
              <h5>{service.heading}</h5>
              <p>{service.desc}</p>
            </div>
          );
        })}

        <div className="acheivements">
          <h2>What we acheive</h2>
          <div className="each-card">
            <div className="card">
              <span>60+</span>
              <p>years of experience</p>
            </div>
            <div className="card">
              <span>1L+</span>
              <p>people joined</p>
            </div>
            <div className="card">
              <span>50K+</span>
              <p>students trained</p>
            </div>
            <div className="card">
              <span>600+</span>
              <p>publications</p>
            </div>
            <div className="card">
              <span>10K+</span>
              <p>Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
