import React from "react";
import "./Programs.css";
import { ProgramsData } from "./ProgramsData";

const Programs = () => {
  return (
    <div id="programs-container">
      <h1>What do we provide for our students</h1>
      <p>Join our programs for well-being and stress-free life.</p>
      <div className="all-programs">
        {ProgramsData.map((program, index) => {
          return (
            <div className="programs" key={index}>
              <img src={program.img} alt="program-img" />
              <h1>{program.heading}</h1>
              <p>{program.desc}</p>
              <button>read more</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
