import React ,{useEffect} from "react";
import { project_mockup1 } from "../Assets";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from 'aos';


const ProjectLeftCard = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);


  return (
    <>
      <div className="project-left-main-content-box" data-aos="fade-right" data-aos-delay="300">
        <div className="project-count-box-left">01</div>
        <div className="project-showcase-left-img-box project-showcase-card-box">
          <img src={project_mockup1}></img>
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
        <div className="project-details-btn-box">
          <div className="project-btn-icon"></div>
          <button>
            <Link to="/project1-details">Project Details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectLeftCard;
