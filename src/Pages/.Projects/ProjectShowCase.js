import React ,{useEffect} from "react";

import NavLink from "react-router-dom";

import Navbar from "../../Components/Navbar";
import ProjectLeftCard from "../../Components/ProjectLeftCard";
import  ProjectRightCard from "../../Components/ProjectRightCard";

const ProjectShowCase = () => {




  return (
    <>
      <div className="app-main-wrapper">
        <Navbar />
        <div className="projects-showcase-main-cover">
          <div className="container">
            <div className="projects-showcase-main-cover">
              <div className="projects-showcase-title-box">
                <h2 className="projects-showcase-title">
                  The Digital World in Your Hands{" "}
                </h2>
              </div>
              <div className="projects-showcase-content-cover">
                <div className="main-line-box"></div>
                <div className="project-showcase-inner-cover mb-4">
                  <span className="inner-line"></span>
                  <ProjectLeftCard  />
                  <ProjectRightCard  />
                </div>
                <div className="project-showcase-inner-cover mb-4">
                  <span className="inner-line"></span>
                  <ProjectLeftCard  />
                  <ProjectRightCard  />
                </div>
                <div className="project-showcase-inner-cover mb-4">
                  <span className="inner-line"></span>
                  <ProjectLeftCard  />
                  <ProjectRightCard  />
                </div>
                <div className="project-showcase-inner-cover mb-4">
                  <span className="inner-line"></span>
                  <ProjectLeftCard  />
                  <ProjectRightCard  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectShowCase;
