import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Skill1,
  Skill2,
  Skill3,
  Skill4,
  Skill5,
  Skill7,
  Skill6,
} from "../Assets";

// ... Import other skills

const SkillsCard = () => {
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants1 = {
    hidden: { opacity: 0, translateX: -150, scale: 0.8 },
    visible: { opacity: 1, translateX: 0, scale: 0.8 },
  };

  const variantsjquey = {
    hidden: { opacity: 0, translateX: -150, scale: 0.9 },
    visible: { opacity: 1, translateX: 0, scale: 0.9 },
  };

  const variantsJavaScript = {
    hidden: { opacity: 0, translateX: -150, scale: 1 },
    visible: { opacity: 1, translateX: 0, scale: 1 },
  };

  const variantshtml = {
    hidden: { opacity: 0, translateX: 150, scale: 1 },
    visible: { opacity: 1, translateX: 0, scale: 1 },
  };

  const variantsReact = {
    hidden: { opacity: 0, width: 0, scale: 0.8 },
    visible: { opacity: 1, width: "10%", scale: 1.1 },
  };

  const variantbootstrap = {
    hidden: { opacity: 0, translateX: 150, scale: 0.8 },
    visible: { opacity: 1, translateX: 0, scale: 0.8 },
  }

  useEffect(() => {
    console.log("inView:", inView);
    if (inView) {
      controls.start("visible");
    }else {
      controls.start("initial");
    }

  }, [controls, inView]);

  return (
    <div className="skills-cover-box">
      <motion.div
        className="skills-box"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants1}
        transition={{ duration: 0.5, delay: 0.5 }}
        
      >
        <div className="skills-img-box">
          <img src={Skill4} alt="Git" />
        </div>
        <h5 className="skill_title">Git</h5>
      </motion.div>
      <motion.div
        className="skills-box"
        initial="hidden"
        animate={controls}
        variants={variantsjquey}
        transition={{ duration: 0.5, delay: 0.7 }}
        
      >
        <div className="skills-img-box">
          <img src={Skill3} alt="Git" />
        </div>
        <h5 className="skill_title">JQuery</h5>
      </motion.div>
      <motion.div
        className="skills-box"
        initial="hidden"
        animate={controls}
        variants={variantsJavaScript}
        transition={{ duration: 0.5, delay: 0.9 }}
        
      >
        <div className="skills-img-box">
          <img src={Skill1}></img>
        </div>
        <h5 className="skill_title">JavaScript</h5>
      </motion.div>
      <motion.div
        className="skills-box main-skill-box"
        initial="hidden"
        animate={controls}
        variants={variantsReact}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="skills-img-box">
          <img src={Skill2}></img>
        </div>
        <h5 className="skill_title">React Js</h5>
      </motion.div>
      <motion.div
        className="skills-box"
        initial="hidden"
        animate={controls}
        variants={variantshtml}
        transition={{ duration: 0.5, delay: 0.9 }}
        
      >
        <div className="skills-img-box">
          <img src={Skill5}></img>
        </div>
        <h5 className="skill_title">HTML</h5>
      </motion.div>
      <motion.div
        className="skills-box"
        initial="hidden"
        animate={controls}
        variants={variantsjquey}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="skills-img-box">
          <img src={Skill6}></img>
        </div>
        <h5 className="skill_title">CSS3</h5>
      </motion.div>
      <motion.div
        className="skills-box"
        initial="hidden"
        animate={controls}
        variants={variantbootstrap}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="skills-img-box">
          <img src={Skill7}></img>
        </div>
        <h5 className="skill_title">Bootstrap</h5>
      </motion.div>
    </div>
  );
};

export default SkillsCard;
