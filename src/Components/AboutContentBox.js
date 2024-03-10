
import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";


const AboutContent = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  
    const scaleVariants = {
      hidden: { scale: 0 },
      visible: {
        scale: 1.05,
        transition: {
          duration: 0.7,
          delay : 0.1
        },
      },
    };
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        className="about-content-main-wrapper"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scaleVariants}
      >
        <div className="about-header-title-section d-flex justify-content-between">
                      <h3>Hi Im Khan Maheeb</h3>

                      <div className="about-header-social-section">
                        <h5>
                          I'm on
                          <span className="social-icon-box add-extra-margin">
                            <a>
                              <FaTwitter />
                            </a>
                          </span>
                          <span className="social-icon-box">
                            <a>
                              <FaLinkedinIn />
                            </a>
                          </span>
                          <span className="social-icon-box">
                            <a>
                              <FaInstagram />
                            </a>
                          </span>
                        </h5>
                      </div>
                    </div>
                    <hr className="custom-hr"></hr>
                    <div className="about-section-data-content">
                      <div className="about-section-text-data">
                        <p>
                          I'm a web developer from Southampton, UK. Currently
                          lead developer at a local agency, Fhoke. In my spare
                          time I enjoy DIY, gaming and building my own projects.
                          My preferred tools are PHP, Laravel and Vue.js. I
                          recently converted my Inertia app from Laravel Mix to
                          using Vite. UK. Currently lead
                        </p>
                        <p>
                          {" "}
                          My preferred tools are PHP, Laravel and Vue.js. I
                          recently converted my Inertia app from Laravel Mix to
                          using Vite. I recently converted my Inertia app from
                          Laravel Mix to using Vite.
                        </p>
                        <p>
                          I'm a web developer from Southampton, UK. Currently
                          lead developer at a local agency, Fhoke. In my spare
                          time I enjoy DIY,
                        </p>
                      </div>
                    </div>
                    <hr className="custom-hr"></hr>
                    <div className="about-section-footer-box">
                      <div className="about-section-footer-social-details d-flex justify-content-between">
                        <div className="footer-social-box d-flex">
                          <p>
                            <a>
                              
                              <FaLocationDot /> Lives In New York, USA
                            </a>
                          </p>
                          <p className="mx-4">
                            <a>
                              khan@gmail.com
                            </a>
                          </p>
                        </div>

                        <div className="download-resume-btn-box">
                          <button>
                            <a>
                            <span className="download-icon"><MdOutlineFileDownload/></span>
                              Download Resume
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
      </motion.div>
    );
  };
  
export default AboutContent;
  

