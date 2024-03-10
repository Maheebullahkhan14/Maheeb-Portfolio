import React from "react";
import { rock_on_icon } from "../../Assets";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Contact = () => {
  return (
    <>
      <div className="app-main-wrapper">
        <Navbar />
        <div className="contact-main-wrapper-cover">
          <div className="container">
            <div className="contact-inner-cover-wrapper">
              <div className="contact-top-box-cover">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-lg-5">
                    <div className="contact-main-heading">
                      <h5 className="contact-heading-title">
                        Ready to connect and make waves together?
                        <span>
                          <img src={rock_on_icon}></img>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact-heading-details">
                      <p>
                        "Embark on a journey with us – your inquiries are the
                        spark to our next big adventure! Ring us for a touch of
                        greatness."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form-cover-wrapper">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-4">
                    <div className="contact-details-box-cover">
                      <div className="contact-heading-small-title">
                        <h5>DON'T BE AFRAID MAN !</h5>
                        <h5>SAY HELLO</h5>
                      </div>
                      <div className="contact-detail-inner-box">
                        <div className="contact-detail-box">
                          <div className="contact-link">
                            <a>+91 89898989898</a>
                          </div>
                        </div>
                        <div className="contact-detail-box">
                          <div className="contact-link">
                            <a>infoKhan@gmail.com</a>
                          </div>
                        </div>
                      </div>

                      <div className="contact-follow-box">
                        <h5>FOLLOW</h5>

                        <div className="contact-follow-pills-cover mt-3">
                          <div className="contact-pills">Twitter</div>
                          <div className="contact-pills">Linkedin</div>
                          <div className="contact-pills">Instagram</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="contact-form-wrapper">
                      <form>
                        <div className="row">
                          <div className="col-lg-6 mb-lg-4 mb-3">
                            <div className="contact-input-box">
                              <input type="text" placeholder="Name"></input>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-lg-4 mb-3">
                            <div className="contact-input-box">
                              <input type="text" placeholder="Email"></input>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-lg-4 mb-3">
                            <div className="contact-input-box">
                              <input type="text" placeholder="Phone"></input>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-lg-4 mb-3">
                            <div className="contact-input-box">
                              <input type="text" placeholder="Subject"></input>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="contact-input-box">
                              <input type="text" placeholder="Messages"></input>
                            </div>
                          </div>
                        </div>
                        <div className="quotes-btn-box-cover">
                          <button type="submit">SEND ME QUOTES</button>
                        </div>
                      </form>
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

export default Contact;
