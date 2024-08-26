import { FunctionComponent } from "react";
import LogoImazai from "./LogoImazai";
import "./Navbar.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={`navbar ${className}`}>
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="button">
        <img className="chevron-left-icon" alt="" src="/chevronleft.svg" />
        <b className="label">Try it now</b>
        <img className="chevron-left-icon" alt="" src="/chevronright.svg" />
      </div>
      <div className="icon">
        <img className="arrow-up-right-icon" alt="" src="/arrowupright.svg" />
      </div>
      <div className="topbar">
        <div className="topbar-container">
          <div className="logo-wrapper">
            <LogoImazai
              withText
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              zapFast="/zapfast.svg"
              propHeight="36px"
              propWidth="36px"
              propMinHeight="36px"
              propFlex="unset"
              propFontSize="24px"
              propFontFamily="'Instrument Sans'"
              propColor="#0179ff"
              propMargin="0"
              propFontWeight="700"
            />
          </div>
          <div className="nav-link">
            <div className="button1">
              <img
                className="chevron-left-icon1"
                alt=""
                src="/chevronleft1.svg"
              />
              <b className="label1">Home</b>
              <img
                className="chevron-left-icon1"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
            <div className="button2">
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronleft2.svg"
              />
              <div className="label2">About</div>
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronright2.svg"
              />
            </div>
            <div className="button3">
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronleft2.svg"
              />
              <div className="label3">Gallery</div>
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronright2.svg"
              />
            </div>
            <div className="button4">
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronleft2.svg"
              />
              <div className="label4">Blog</div>
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronright2.svg"
              />
            </div>
            <div className="button3">
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronleft2.svg"
              />
              <div className="label5">Contact</div>
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronright2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-up-right-wrapper">
        <img className="arrow-up-right-icon" alt="" src="/arrowupright-1.svg" />
      </div>
    </header>
  );
};

export default Navbar;
