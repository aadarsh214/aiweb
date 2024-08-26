import { FunctionComponent } from "react";
import TextInput from "./TextInput";
import "./HeroContent.css";
import React from "react";

export type HeroContentType = {
  className?: string;
};

const HeroContent: FunctionComponent<HeroContentType> = ({
  className = "",
}) => {
  return (
    <section className={`hero-content ${className}`}>
      <div className="hero-form-container">
        <div className="hero-form-parent">
          <div className="hero-form">
            <h3 className="effortlessly-create-personaliz">
              Effortlessly create personalized greeting cards with AI-generated
              images and text. Start now and make every occasion special.
            </h3>
          </div>
          <div className="form-wrapper">
            <div className="form">
              <TextInput iconRight iconLeft hintText label />
              <button className="button6">
                <img
                  className="chevron-left-icon6"
                  alt=""
                  src="/chevronleft.svg"
                />
                <b className="label8">Generate</b>
                <img
                  className="chevron-right-icon6"
                  alt=""
                  src="/chevronright.svg"
                />
              </button>
            </div>
          </div>
          <div className="image-5-parent">
            <div className="image-5">
              <img
                className="image5-icon"
                loading="lazy"
                alt=""
                src="/image5@2x.png"
              />
              <div className="image-caption">
                <h3 className="a-magical-forest">
                  A magical forest with fairies and ancient trees
                </h3>
                <div className="as-the-morning">
                  As the morning mist dances through the ancient woodland, a
                  solitary figure emerges amidst the towering trees. "Fairies in
                  the Forest" tells the tale of an unlikely encounter between
                  anquity and nature.
                </div>
              </div>
            </div>
            <div className="generated-images">
              <div className="generated-image-container">
                <div className="image1">
                  <img
                    className="mask-group-icon"
                    loading="lazy"
                    alt=""
                    src="/mask-group.svg"
                  />
                  <b className="m">1.5 M</b>
                  <b className="image-generated-successfully">
                    image generated successfully
                  </b>
                </div>
              </div>
              <div className="second-image-container">
                <img
                  className="image2-icon"
                  loading="lazy"
                  alt=""
                  src="/image2@2x.png"
                />
                <div className="third-image-container">
                  <img
                    className="image3-icon"
                    loading="lazy"
                    alt=""
                    src="/image3@2x.png"
                  />
                  <div className="fourth-image-container">
                    <div className="fourth-image-wrapper">
                      <img
                        className="image3-icon1"
                        alt=""
                        src="/image3-1@2x.png"
                      />
                    </div>
                    <div className="image-actions">
                      <div className="arrow-up-right-container">
                        <input className="arrow-up-right" type="checkbox" />
                      </div>
                      <button className="button7">
                        <img
                          className="chevron-left-icon6"
                          alt=""
                          src="/chevronleft.svg"
                        />
                        <b className="label9">Go to Gallery</b>
                        <img
                          className="chevron-left-icon6"
                          alt=""
                          src="/chevronright.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits-title-container-wrapper">
          <div className="benefits-title-container">
            <h1 className="what-do-you">What do you get ?</h1>
            <div className="benefits-answer-container">
              <div className="experience-the-power">
                Experience the Power of AI Image Generator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
