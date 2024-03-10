import React from 'react'
import Navbar from "../../Components/Navbar";
import { expend_mock1 , project_mockup1 } from '../../Assets';


const Project1 = () => {
  return (
    <>
        <div className='project-details-app-main-wrapper'>
            <Navbar />
            <div className="projects-details-cover-wrapper">
                <div className="container">
                    <div className="project-details-content-cover">
                        <div className='project-det-hero-cover'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='project-det-title'>
                                        <h3>Expend Tracker App
                                        </h3>
                                        <div className="project-infographics-cover">
                                            <div className="project-info-pills-cover">
                                                <div className="project-info-pills">
                                                    <p>Jan 2024</p>
                                                </div>
                                                <div className="project-info-pills">
                                                    <p>Link</p>
                                                </div>
                                                <div className="project-info-pills">
                                                    <p>Personal Project</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='project-det-short-summary'>
                                        <p>A React app for seamless expense management. Track, categorize, and analyze your spending effortlessly. User-friendly interface, real-time updates, and insightful reports for better financial control. Simplify budgeting with Expend Tracker.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='projects-det-cards-cover'>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="proj-small-card-cover">
                                        <div className="proj-small-card">
                                            <img src={expend_mock1}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="proj-high-card-cover">
                                        <div className="proj-small-card">
                                            <img src={project_mockup1}></img>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4">
                                    <div className="proj-small-card-cover">
                                        <div className="proj-small-card">
                                            <img src={expend_mock1}></img>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="projects-description-cover-box">
                            
                            <div className="projects-description-content-cover">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="projects-description-content-box">
                                            <div className="projects-title-header">
                                                <h2>Project Description</h2>
                                            </div>
                                            <div className="projects-description-content">
                                                <p>Habitant libero ultricies fusce lacus fermentum augue nulla euismod penatibus quis nam netus, posuere tortor condimentum pulvinar rutrum ad diam cubilia tempor sem. Lobortis cubilia diam suscipit massa suspendisse vitae, eu lectus neque ridiculus facilisis curae interdum, augue. Non ut porttitor nostra id accumsan habitant arcu, nullam venenatis facilisi primis penatibus consequat bibendum mollis, lacus ad erat pulvinar ligula etiam. Nullam ullamcorper et habitasse vestibulum nibh venenatis torquent.</p>
                                            <p>
                                            Non ut porttitor nostra id accumsan habitant arcu, nullam venenatis facilisi primis penatibus consequat bibendum mollis, lacus ad erat pulvinar ligula etiam. Nullam ullamcorper et habitasse vestibulum nibh venenatis torquent.
                                            </p>
                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className="projects-skills-cover">
                                            <h5>Skills</h5>
                                            <div className='projects-skills-pills-cover'>
                                                <div className='project-skills-pills'>
                                                    <p>LocalStorage</p>
                                                </div>
                                                <div className='project-skills-pills'>
                                                    <p>Forms</p>
                                                </div>
                                                <div className='project-skills-pills'>
                                                    <p>Context Api</p>
                                                </div>
                                                <div className='project-skills-pills'>
                                                    <p>React Hooks</p>
                                                </div>
                                                <div className='project-skills-pills'>
                                                    <p>useEffect Hooks</p>
                                                </div>
                                                <div className='project-skills-pills'>
                                                    <p>React Router Dom</p>
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
  )
}

export default Project1