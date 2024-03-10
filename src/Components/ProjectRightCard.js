import React,{useEffect} from "react";
import { project2_banner } from "../Assets";
import { FiLink } from "react-icons/fi";
import AOS from "aos";
import { Link } from "react-router-dom";

const ProjectRightCard = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  return (
    <>
      <div className="project-right-main-content-box" data-aos="fade-left" data-aos-delay="600">
        <div className="project-count-box-right">02</div>
        <div className="project-showcase-right-img-box project-showcase-card-box custom-mt">
          <img src={project2_banner} alt="banner-2"></img>
          <div className="projects-link-box-cover">
            <div className="projects-link-box">
              <button className="project-link-btn">
                <a>
                  Live Link{" "}
                  <span>
                    <FiLink />
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="project-details-right-btn-box">
          <div className="project-btn-icon"></div>
          <button>
            <Link to="/project1-details">Project Details</Link>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ProjectRightCard;
