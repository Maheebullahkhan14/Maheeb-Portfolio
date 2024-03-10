import React from "react";
import { motion } from "framer-motion";

const AboutTitle = () => {


  const letterVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    loop: Infinity,
    repeatDelay: 1,
  };

  const h5Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <motion.h5 variants={h5Variants} initial="hidden" animate="visible" className="text-center">
        {Array.from("Unveiling My Journey").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h5>
    </>
  );
};

export default AboutTitle;
