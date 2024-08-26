import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Button.css";

export type ButtonType = {
  className?: string;
  iconLeft?: boolean;
  text?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  iconLeft = false,
  text = "Contact",
  propMinWidth,
  propFontWeight,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      fontWeight: propFontWeight,
    };
  }, [propMinWidth, propFontWeight]);

  return (
    <div className={`button13 ${className}`}>
      {iconLeft && (
        <img className="chevron-left-icon13" alt="" src="/chevronleft2.svg" />
      )}
      <b className="label15" style={labelStyle}>
        {text}
      </b>
      <input className="frame-input" type="checkbox" />
    </div>
  );
};

export default Button;
