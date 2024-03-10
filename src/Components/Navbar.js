import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../Assets/main-logo.png"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";




const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-chang navbar-expand-lg">
        <div className="container position-re">
        
          <div className="row d-flex justify-content-center custom-main-navbar">
            <div className="col-lg-2 col-6 order1">
              <div className="bord">
                <Link className="logo icon-img-70" to="/">
                    <img src={mainLogo}  alt="MaheebK"/>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 order3">
              <div className="bg">
                {/* navbar links */}
                <div className="full-width">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <span className="rolling-text">
                          <div className="block">
                            <span className="letter">H</span>
                            <span className="letter">o</span>
                            <span className="letter">m</span>
                            <span className="letter">e</span>
                          </div>
                          <div className="block">
                            <span className="letter">H</span>
                            <span className="letter">o</span>
                            <span className="letter">m</span>
                            <span className="letter">e</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        <span className="rolling-text">
                          <div className="block">
                            <span className="letter">A</span>
                            <span className="letter">b</span>
                            <span className="letter">o</span>
                            <span className="letter">u</span>
                            <span className="letter">t</span>
                          </div>
                          <div className="block">
                            <span className="letter">A</span>
                            <span className="letter">b</span>
                            <span className="letter">o</span>
                            <span className="letter">u</span>
                            <span className="letter">t</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        <span className="rolling-text">
                          <div className="block">
                            <span className="letter">S</span>
                            <span className="letter">e</span>
                            <span className="letter">r</span>
                            <span className="letter">v</span>
                            <span className="letter">i</span>
                            <span className="letter">c</span>
                            <span className="letter">e</span>
                            <span className="letter">s</span>
                          </div>
                          <div className="block">
                            <span className="letter">S</span>
                            <span className="letter">e</span>
                            <span className="letter">r</span>
                            <span className="letter">v</span>
                            <span className="letter">i</span>
                            <span className="letter">c</span>
                            <span className="letter">e</span>
                            <span className="letter">s</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/projects">
                        <span className="rolling-text">
                          <div className="block">
                            <span className="letter">P</span>
                            <span className="letter">r</span>
                            <span className="letter">o</span>
                            <span className="letter">j</span>
                            <span className="letter">e</span>
                            <span className="letter">c</span>
                            <span className="letter">t</span>
                            <span className="letter">s</span>
                          </div>
                          <div className="block">
                            <span className="letter">P</span>
                            <span className="letter">r</span>
                            <span className="letter">o</span>
                            <span className="letter">j</span>
                            <span className="letter">e</span>
                            <span className="letter">c</span>
                            <span className="letter">t</span>
                            <span className="letter">s</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="blogs.html">
                        <span className="rolling-text">
                          <div className="block">
                            <span className="letter">B</span>
                            <span className="letter">l</span>
                            <span className="letter">o</span>
                            <span className="letter">g</span>
                          </div>
                          <div className="block">
                            <span className="letter">B</span>
                            <span className="letter">l</span>
                            <span className="letter">o</span>
                            <span className="letter">g</span>
                          </div>
                        </span>
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        <span className="rolling-text">
                          <div className="block">
                            <span className="letter">C</span>
                            <span className="letter">o</span>
                            <span className="letter">n</span>
                            <span className="letter">t</span>
                            <span className="letter">a</span>
                            <span className="letter">c</span>
                            <span className="letter">t</span>
                          </div>
                          <div className="block">
                            <span className="letter">C</span>
                            <span className="letter">o</span>
                            <span className="letter">n</span>
                            <span className="letter">t</span>
                            <span className="letter">a</span>
                            <span className="letter">c</span>
                            <span className="letter">t</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 order2">
              <div className="bord d-flex justify-content-start">
                <ul className="social d-flex rest">
                  <li>
                    <a href="#0">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
                <button className="navbar-toggler" type="button">
                  <span className="icon-bar">
                    <i className="fas fa-bars" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
