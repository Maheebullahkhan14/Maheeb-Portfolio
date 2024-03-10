import Typewriter from "typewriter-effect";

import React from "react";

const HeroTitleNew = () => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I’m a Front-end Developer and Web Designer Based in Mumbai.")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </>
  );
};

export default HeroTitleNew;
