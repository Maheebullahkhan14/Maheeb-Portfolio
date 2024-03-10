import React from "react";
import Skill1 from "../Assets/Skill1.png";

const SkillsPills = () => {
  return (
    <>
      <div className="skills-box">
        <div className="skills-img-box">
          <img src={Skill1}></img>
        </div>
        <h5 className="skill_title">JavaScript</h5>
      </div>
    </>
  );
};

export default SkillsPills;
