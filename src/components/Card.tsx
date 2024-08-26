import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Card.css";

export type CardType = {
  className?: string;
  emptyInput?: string;
  generateAnImage?: string;
  enterYoyrTextAndLetTheMagic?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  propWidth,
  emptyInput,
  propMinWidth,
  generateAnImage,
  propDisplay,
  enterYoyrTextAndLetTheMagic,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const emptyInputStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const generateAnImageStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`card ${className}`} style={cardStyle}>
      <div className="first-step-icon">
        <div className="input-placeholder">
          <b className="empty-input" style={emptyInputStyle}>
            {emptyInput}
          </b>
        </div>
      </div>
      <div className="generate">
        <h3 className="generate-an-image" style={generateAnImageStyle}>
          {generateAnImage}
        </h3>
        <div className="enter-yoyr-text">{enterYoyrTextAndLetTheMagic}</div>
      </div>
    </div>
  );
};

export default Card;
