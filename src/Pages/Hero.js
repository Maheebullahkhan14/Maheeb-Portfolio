import { React, useEffect, useState } from "react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import { Avtar_img } from "../Assets";
import { motion } from "framer-motion";
import HeroTitle from "../Components/HeroTitle";
// import star_shape from "../../Assets/index"

const Hero = () => {
  const [visibleIndex, setVisisbleindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisisbleindex((prevIndex) => (prevIndex + 1) % 3);
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="app-main-wrapper">
        <Navbar />
        <div className="Hero-section-main-wrapper">
          <div className="hero-main-section">
            <div className="container">
              <div className="hero-box-cover">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-lg-5">
                    <div className="projects-button-wrapper-box">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6 p-0">
                              <motion.div className="project-first-btn-box d-flex flex-column"
                              initial={{ opacity: 0, scale: 0.5, width: 0 }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    width: "88%",
                                  }}
                                  transition={{ duration: 0.4, delay: 0.5 }}
                              >
                                <motion.div
                                  className="hero-about-section-btn hero-box"
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.9 }}
                                >
                                  <h6 className="About-btn">About Us</h6>
                                </motion.div>
                                <div className="project-download-btb-box">
                                  <FiArrowDown />
                                  <h6>Download CV</h6>
                                </div>
                              </motion.div>
                            </div>
                            <div className="col-lg-6 p-0">
                              <div className="project-second-btn-box d-flex flex-column">
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.5, width: 0 }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    width: "86%",
                                  }}
                                  transition={{ duration: 0.3, delay: 0.4 }}
                                  className="experience-btn-box"
                                >
                                  <h5>1</h5>
                                  <p>Year of experience</p>
                                </motion.div>
                                <motion.div
                                  className="stylish-bg"
                                  initial={{ opacity: 0, scale: 0.5, width: 0 }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    width: "84%",
                                  }}
                                  transition={{ duration: 0.3, delay: 0.6 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="col-lg-12 p-0">
                              <motion.div
                                className="our-service-btn-box-wrapper d-flex align-items-center"
                                initial={{ opacity: 0, scale: 0.5, width: 0 }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                  width: "96%",
                                }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                              >
                                <motion.div
                                  className="Our-service"
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.9 }}
                                >
                                  <FiArrowUpRight />
                                </motion.div>
                                <div className="our-service-letter">
                                  <h5 className="mx-3">Our Services</h5>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 p-0">
                          <div className="last-profile-box-cover">
                            <motion.div
                              className="profile-box"
                              initial={{ opacity: 0, scale: 0.5, width: 0 }}
                              animate={{ opacity: 1, scale: 1, width: "88%" }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              <img src={Avtar_img}></img>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "88%" }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="our-portfolio-btn-box"
                            >
                              <p>My Projects</p>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="content">
                      <h5 className="cd-headline slide">
                        <span>Hello, I’m</span>
                        <span
                          className="cd-words-wrapper main-color"
                          style={{ width: "239.953px" }}
                        >
                          <b
                            className={
                              visibleIndex === 0 ? "is-visible" : "is-hidden"
                            }
                          >
                            Khan Maheeb
                          </b>
                          <b
                            className={
                              visibleIndex === 1 ? "is-visible" : "is-hidden"
                            }
                          >
                            Front-End Developer
                          </b>
                          <b
                            className={
                              visibleIndex === 2 ? "is-visible" : "is-hidden"
                            }
                          >
                            ReactJs Developer
                          </b>
                        </span>
                      </h5>
                      <HeroTitle data="I’m a Front-end Developer and Web Designer Based in Mumbai."/>
                      <p className="text">
                        I've done remote work for agencies, consulted for
                        startups, and collaborated with talented people to
                        create digital products for both business and consumer
                        use.
                      </p>
                      <div className="stauts mt-4 pt-4 bord-thin-top">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="ml-auto">
                            <div className="butn-presv">
                              <a
                                href="contact.html"
                                className="butn butn-md butn-bord radius-5 skew"
                              >
                                <span>Hire Me!</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
