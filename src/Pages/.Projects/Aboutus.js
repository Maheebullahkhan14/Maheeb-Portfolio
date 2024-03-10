import React , {useRef , useEffect} from "react";
import AboutTitle from "../../Components/AboutTitle";
import AboutContent from "../../Components/AboutContentBox";
import AOS from 'aos';

import Navbar from "../../Components/Navbar";
import SkillsCard from "../../Components/SkillsCard";

const Aboutus = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);

  const contentBoxRef = useRef(null);
  
  const scrollToBottom = () => {
    if (contentBoxRef.current) {
      const { scrollHeight, clientHeight } = contentBoxRef.current;
      const maxScrollTop = scrollHeight - clientHeight;
      contentBoxRef.current.animate(
        { scrollTop: maxScrollTop },
        { duration: 500, easing: 'ease-in-out', fill: 'both' }
      );
    }
  };

  useEffect(() =>{
    scrollToBottom();
  },[])



  return (
    <>
      <div className="app-main-wrapper">
        <Navbar />
        <div className="about-us-main-wrapper-cover mt-5">
          <div className="about-us-section-cover">
            <div className="container">
              <div className="highlight-font-effect">
                <AboutTitle />
              </div>
              <div className="row d-flex">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                  <AboutContent />
                </div>
              </div>
              <div className="myskills-main-wrapper-cover">
                <div className="skills-container-box-wrapper">
                  <h2 className="skills-heading">Proficiencies at a Glance</h2>
                  <SkillsCard/>
                  <div className="summary-box my-4">
                    <p>
                      As a frontend developer, I specialize in React.js,
                      JavaScript, HTML, and CSS. I efficiently use Bootstrap for
                      responsive design, jQuery for interactivity, and Git for
                      version control. My skills empower me to create visually
                      appealing and user-friendly web applications.
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="About-my-studies-main-wrapper">
                <div className="about-my-journey">
                  <h2 className="text-center">My Studies</h2>

                  <div className="studies-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6">
                        {/* <div className="degree-main-cover">
                          <div className="degree-vertical-line"></div>
                          <div className="degree-content-box-cover" ref={contentBoxRef}>
                            <div className="degree-content-box">
                                <div className="degree-heading-box">
                                  <h5>AIKTC SCHOOL OF ENGINEERING & TECHNOLOGY : B.E</h5>
                                </div>
                                <div className="degree-details-cover text-black">
                                  <p>
                                    I'm a web developer from Southampton, UK.
                                    Currently lead developer at a local agency,
                                    Fhoke. In my spare time I enjoy DIY, gaming and
                                    building my own projects. My preferred tools are
                                    PHP, Laravel and Vue.js. I recently converted my
                                    Inertia app from Laravel Mix to using Vite. UK.
                                    Currently lead
                                  </p>
                                </div>
                            </div>

                            
                            
                          </div>
                        </div> */}
                      </div>
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-4">
                          <div className="degree-content-box" >
                                <div className="degree-heading-box">
                                  <h5>AIKTC SCHOOL OF ENGINEERING & TECHNOLOGY : B.E</h5>
                                </div>
                                <div className="degree-details-cover text-black">
                                  <p>
                                    I'm a web developer from Southampton, UK.
                                    Currently lead developer at a local agency,
                                    Fhoke. In my spare time I enjoy DIY, gaming and
                                    building my own projects. My preferred tools are
                                    PHP, Laravel and Vue.js. I recently converted my
                                    Inertia app from Laravel Mix to using Vite. UK.
                                    Currently lead
                                  </p>
                                </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="degree-banner-cover">
                                <img src="https://img.freepik.com/free-vector/stay-home-abstract-concept-vector-illustration-forced-isolation-covid19-outbreak-prevention-measures-social-distance-governmental-support-self-protection-wear-mask-abstract-metaphor_335657-6164.jpg?w=740&t=st=1708371803~exp=1708372403~hmac=1d737c6e79dfca02cee7d6fe5d0b398c43033ddd41b41c0dd2c099df0fc58de5"></img>
                              </div>
                          </div>
                          <div className="col-lg-4">
                          <div className="degree-content-box" >
                                <div className="degree-heading-box">
                                  <h5>AIKTC SCHOOL OF ENGINEERING & TECHNOLOGY : B.E</h5>
                                </div>
                                <div className="degree-details-cover text-black">
                                  <p>
                                    I'm a web developer from Southampton, UK.
                                    Currently lead developer at a local agency,
                                    Fhoke. In my spare time I enjoy DIY, gaming and
                                    building my own projects. My preferred tools are
                                    PHP, Laravel and Vue.js. I recently converted my
                                    Inertia app from Laravel Mix to using Vite. UK.
                                    Currently lead
                                  </p>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    

                    {/* <div className="degree-banner-cover">
                            <img src="https://img.freepik.com/premium-vector/one-line-drawing-young-happy-graduate-male-college-student-wearing-graduation-uniform-design-vector_533993-11525.jpg"></img>
                        </div> */}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
