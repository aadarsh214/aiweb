import { FunctionComponent } from "react";
import Card from "./Card";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`features-content-wrapper ${className}`}>
      <div className="features-content">
        <div className="features-container">
          <div className="features">
            <div className="feature-card-container">
              <div className="card-feature">
                <div className="first-card">
                  <h3 className="ai-powered-creativity">
                    AI-Powered Creativity
                  </h3>
                  <div className="unleash-the-power">
                    Unleash the power of AI to craft one-of-a-kind cards that
                    perfectly match your message. Our technology generates
                    personalized images and text, ensuring every card is truly
                    unique.
                  </div>
                </div>
                <div className="second-card">
                  <div className="third-card">
                    <div className="blank-icon">
                      <b className="spacing-icon">99+</b>
                    </div>
                    <div className="fifth-card">
                      <img
                        className="palette-icon"
                        alt=""
                        src="/palette-icon@2x.png"
                      />
                      <img
                        className="dropper-icon"
                        loading="lazy"
                        alt=""
                        src="/frame-4@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-feature-child" />
              </div>
              <div className="card-feature1">
                <div className="seventh-card">
                  <h3 className="ai-powered-creativity">Easy Customization</h3>
                  <div className="unleash-the-power">
                    Design with ease using our intuitive tools. Adjust colors,
                    fonts, and layouts to create a card that’s as unique as the
                    moment you’re celebrating.
                  </div>
                </div>
                <div className="image-gallery">
                  <div className="save-phone">
                    <div className="gallery-image-wrapper">
                      <img className="image-icon" alt="" src="/image@2x.png" />
                      <img
                        className="actions-spacing-icon"
                        loading="lazy"
                        alt=""
                        src="/frame-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-card-container1">
              <div className="card-feature2">
                <div className="print-and-delivery-parent">
                  <h3 className="print-and-delivery">Print and Delivery</h3>
                  <div className="from-your-screen">
                    From your screen to their hands—seamlessly design, print,
                    and have your card delivered with just a few clicks.
                  </div>
                </div>
                <div className="brush-icon-wrapper">
                  <div className="brush-icon">
                    <img
                      className="spacing-pair-icon"
                      alt=""
                      src="/frame-4-1@2x.png"
                    />
                    <div className="icon-trio">
                      <img
                        className="brush-02-icon"
                        alt=""
                        src="/palette.svg"
                      />
                      <img
                        className="brush-02-icon"
                        loading="lazy"
                        alt=""
                        src="/dropper.svg"
                      />
                      <img
                        className="brush-02-icon"
                        loading="lazy"
                        alt=""
                        src="/brush02.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-feature3">
                <div className="card-feature-inner">
                  <div className="inspiration-gallery-parent">
                    <h3 className="ai-powered-creativity">
                      Inspiration Gallery
                    </h3>
                    <div className="unleash-the-power">
                      Need a spark of creativity? Explore our gallery filled
                      with stunning templates and designs that you can customize
                      to make your own.
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="frame-parent">
                    <img
                      className="frame-child"
                      alt=""
                      src="/palette-icon@2x.png"
                    />
                    <img
                      className="spacing-phone-icon"
                      alt=""
                      src="/frame-4@2x.png"
                    />
                  </div>
                  <div className="action-trio">
                    <img
                      className="brush-02-icon"
                      loading="lazy"
                      alt=""
                      src="/save01.svg"
                    />
                    <img
                      className="brush-02-icon"
                      loading="lazy"
                      alt=""
                      src="/arrowright.svg"
                    />
                    <img className="brush-02-icon" alt="" src="/phone02.svg" />
                  </div>
                </div>
                <div className="card-feature-child" />
              </div>
            </div>
          </div>
        </div>
        <div className="how-it-works-title-wrapper">
          <div className="how-it-works-title">
            <h1 className="how-ai-image">How AI Image Generator Works ?</h1>
            <div className="how-it-works-description-conta">
              <div className="these-steps-outline-container">
                <p className="these-steps-outline">{`These steps outline the process of using the AI Image Generator, `}</p>
                <p className="these-steps-outline">
                  from choosing a style to saving or sharing the final artwork
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="steps-content-parent">
          <div className="steps-content">
            <div className="steps-container">
              <Card
                emptyInput="1"
                generateAnImage="Generate an image"
                enterYoyrTextAndLetTheMagic="Enter yoyr text and let the magic happen"
              />
              <div className="upload">
                <div className="image-input">
                  <img
                    className="img-icon"
                    loading="lazy"
                    alt=""
                    src="/img.svg"
                  />
                  <Card
                    propWidth="unset"
                    emptyInput="2"
                    propMinWidth="12px"
                    generateAnImage="Upload Your Image or With Command"
                    propDisplay="inline-block"
                    enterYoyrTextAndLetTheMagic="This could be a photo, a drawing, or any image you have in mind."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="gallery-image-wrapper">
              <img
                className="left-padding-icon"
                alt=""
                src="/left-padding@2x.png"
              />
              <img
                className="right-padding-icon"
                loading="lazy"
                alt=""
                src="/frame-9@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="image1-parent">
          <div className="image11">
            <img className="mask-group-icon1" alt="" src="/mask-group-1.svg" />
            <div className="steps-label">
              <b className="steps">4 Steps</b>
              <b className="to-generate-e-greeting-container">
                <p className="these-steps-outline">to generate</p>
                <p className="these-steps-outline">e-Greeting Cards</p>
              </b>
            </div>
            <div className="steps-button">
              <div className="arrow-up-right-frame">
                <input className="arrow-up-right1" type="checkbox" />
              </div>
              <button className="button8">
                <img
                  className="chevron-left-icon8"
                  alt=""
                  src="/chevronleft.svg"
                />
                <b className="label10">Try it Now</b>
                <img
                  className="chevron-left-icon8"
                  alt=""
                  src="/chevronright.svg"
                />
              </button>
            </div>
          </div>
          <div className="customize-container-wrapper">
            <div className="steps-container">
              <Card
                propWidth="555px"
                emptyInput="3"
                propMinWidth="13px"
                generateAnImage="Customize Parameters"
                propDisplay="unset"
                enterYoyrTextAndLetTheMagic="Adjust brightness, contrast, colors, and more"
              />
              <div className="upload">
                <Card
                  propWidth="555px"
                  emptyInput="4"
                  propMinWidth="13px"
                  generateAnImage="Export Your Artwork"
                  propDisplay="unset"
                  enterYoyrTextAndLetTheMagic="Click Generate: Initiate the AI transformation process."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
