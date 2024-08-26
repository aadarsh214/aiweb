import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import HeroContent from "../components/HeroContent";
import FrameComponent from "../components/FrameComponent";
import Testimonial from "../components/Testimonial";
import FrameComponent1 from "../components/FrameComponent1";
import "./HomePage.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="image6" />
      <main className="revolutionize-your-greetings-w-parent">
        <section className="revolutionize-your-greetings-container">
          <p className="revolutionize-your-greetings">
            <i className="revolutionize">Revolutionize</i>
            <b className="b">{` `}</b>
            <b>Your Greetings</b>
          </p>
          <p className="revolutionize-your-greetings">
            <b> with AI-Powered</b>
            <b className="b">{` `}</b>
            <i className="revolutionize">Custom Cards</i>
          </p>
        </section>
        <HeroContent />
        <FrameComponent />
        <Testimonial />
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default HomePage;
