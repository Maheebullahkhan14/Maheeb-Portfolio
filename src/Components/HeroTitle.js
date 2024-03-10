import React from "react";
import { motion } from "framer-motion";

const HeroTitle = ({data}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    loop: Infinity, // Makes the animation loop infinitely
    repeatDelay: 1
  };

  return (
    <motion.h1 variants={containerVariants} initial="hidden" animate="visible">
      {Array.from(data).map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroTitle;
