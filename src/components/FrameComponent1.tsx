import { FunctionComponent } from "react";
import LogoImazai from "./LogoImazai";
import Button from "./Button";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`shape-footer-wrapper ${className}`}>
      <div className="shape-footer">
        <div className="vector-parent">
          <img className="frame-item" alt="" src="/rectangle-98.svg" />
          <LogoImazai withText zapFast="/zapfast-1.svg" />
        </div>
        <img className="shape-footer-child" alt="" src="/rectangle-97.svg" />
        <img className="mask-group-icon2" alt="" src="/mask-group-2.svg" />
        <div className="footer-description1">
          <h1 className="create-image-manipulations-container">
            <p className="create-image-manipulations">{`Create Image Manipulations `}</p>
            <p className="create-image-manipulations">Only with Command</p>
          </h1>
          <button className="button14">
            <img
              className="chevron-left-icon14"
              alt=""
              src="/chevronleft.svg"
            />
            <b className="label16">Try it Now</b>
            <div className="command-icon">
              <img
                className="arrow-up-right-icon5"
                alt=""
                src="/arrowupright-4.svg"
              />
            </div>
          </button>
        </div>
        <div className="footer-nav">
          <div className="nav-link1">
            <div className="button15">
              <img
                className="chevron-left-icon15"
                alt=""
                src="/chevronleft1.svg"
              />
              <b className="label17">Home</b>
              <div className="footer-link-icons">
                <img
                  className="arrow-up-right-icon6"
                  alt=""
                  src="/arrowupright-8.svg"
                />
              </div>
            </div>
            <Button
              iconLeft={false}
              text="About"
              propMinWidth="40px"
              propFontWeight="unset"
            />
            <Button
              iconLeft={false}
              text="Gallery"
              propMinWidth="47px"
              propFontWeight="500"
            />
            <div className="button16">
              <img
                className="chevron-left-icon14"
                alt=""
                src="/chevronleft2.svg"
              />
              <b className="label18">Blog</b>
              <img
                className="arrow-up-right-icon7"
                alt=""
                src="/arrowupright-11.svg"
              />
            </div>
            <Button iconLeft text="Contact" />
            <div className="button17">
              <img
                className="chevron-left-icon14"
                alt=""
                src="/chevronleft2.svg"
              />
              <b className="label19">Privacy Policy</b>
              <img
                className="arrow-up-right-icon7"
                alt=""
                src="/arrowupright-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="sosmed">
          <img className="logos-icon" alt="" src="/logos.svg" />
          <img className="logos-icon" alt="" src="/logos-1.svg" />
          <img className="logos-icon" alt="" src="/logos-2.svg" />
          <img className="logos-icon" alt="" src="/logos-3.svg" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
