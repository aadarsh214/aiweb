import { FunctionComponent } from "react";
import "./Testimonial.css";

export type TestimonialType = {
  className?: string;
};

const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
}) => {
  return (
    <section className={`testimonial ${className}`}>
      <div className="testimonial-container">
        <div className="testimonial-header">
          <div className="testimonial-title">
            <h1 className="testimonials-from-satisfied-container">
              <p className="testimonials-from">{`Testimonials from `}</p>
              <p className="testimonials-from">satisfied users</p>
            </h1>
            <div className="testimonial-description">
              <div className="take-a-look">
                Take a look at Testimonials from users, This tool has become my
                go-to for generating unique artwork styles. The results are
                impressive
              </div>
            </div>
          </div>
          <div className="testimonial-list">
            <form className="testimonial-cards">
              <div className="card1">
                <div className="card-one-container">
                  <img className="image-icon1" alt="" src="/image1@2x.png" />
                  <div className="card-content-one">
                    <div className="card-content-one-child" />
                    <div className="card-one-details">
                      <h3 className="sarah-johnson-">
                        Sarah Johnson - Graphic Designer
                      </h3>
                      <div className="im-amazed-by">
                        I'm amazed by the versatility of AI Image Generator! As
                        a graphic designer, I often need quick mockups or
                        inspiration for my projects
                      </div>
                    </div>
                    <div className="button9">
                      <img
                        className="chevron-left-icon9"
                        alt=""
                        src="/chevronleft.svg"
                      />
                      <b className="label11">Details</b>
                      <div className="frame-div">
                        <img
                          className="arrow-up-right-icon2"
                          alt=""
                          src="/arrowupright-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card-two">
                <div className="card2">
                  <div className="card-content-two">
                    <img className="image-icon2" alt="" src="/image4@2x.png" />
                    <div className="card-two-details">
                      <div className="card-two-details-child" />
                      <div className="author-two">
                        <h3 className="david-lee-container">
                          <p className="testimonials-from">{`David Lee - Photography `}</p>
                          <p className="testimonials-from">Enthusiast</p>
                        </h3>
                        <div className="ai-image-generator">
                          AI Image Generator has taken my photography to the
                          next level. I love experimenting with different
                          styles, and this tool makes it incredibly easy.
                        </div>
                      </div>
                      <div className="button9">
                        <img
                          className="chevron-left-icon9"
                          alt=""
                          src="/chevronleft.svg"
                        />
                        <b className="label11">Details</b>
                        <div className="frame-div">
                          <img
                            className="arrow-up-right-icon2"
                            alt=""
                            src="/arrowupright-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-three-container">
                <div className="card-content-three">
                  <div className="card1">
                    <div className="content-three">
                      <img
                        className="image-icon3"
                        alt=""
                        src="/image6@2x.png"
                      />
                      <div className="details-three">
                        <div className="card-content-one-child" />
                        <div className="author-three">
                          <h3 className="maria-rodriguez-">
                            Maria Rodriguez - Art Student
                          </h3>
                          <div className="ai-image-generator">
                            As an art student, AI Image Generator has been an
                            invaluable resource for my projects. It's not just
                            about convenience; it's about the endless creative
                            possibilities it offers.
                          </div>
                        </div>
                        <div className="button9">
                          <img
                            className="chevron-left-icon9"
                            alt=""
                            src="/chevronleft.svg"
                          />
                          <b className="label11">Details</b>
                          <div className="frame-div">
                            <img
                              className="arrow-up-right-icon2"
                              alt=""
                              src="/arrowupright-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navigation">
                  <div className="navigation-container">
                    <div className="dots">
                      <div className="dots1" />
                      <div className="dots2" />
                      <div className="dots2" />
                    </div>
                  </div>
                  <button className="button12">
                    <img
                      className="chevron-left-icon9"
                      alt=""
                      src="/chevronleft3.svg"
                    />
                    <b className="label14">Next</b>
                    <div className="frame-div">
                      <img
                        className="chevron-right-icon9"
                        alt=""
                        src="/chevronright-1.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-content">
            <h1 className="create-your-image">
              Create your Image with GenGreetingAI
            </h1>
            <div className="footer-description">
              <div className="contact-us-to-container">
                <p className="testimonials-from">
                  Contact us to learn about how to, import
                </p>
                <p className="testimonials-from">
                  options, and the future share support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
