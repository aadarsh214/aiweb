import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./LogoImazai.css";

export type LogoImazaiType = {
  className?: string;
  withText?: boolean;
  zapFast?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMinHeight?: CSSProperties["minHeight"];
  propFlex?: CSSProperties["flex"];
  propFontSize?: CSSProperties["fontSize"];
  propFontFamily?: CSSProperties["fontFamily"];
  propColor?: CSSProperties["color"];
  propMargin?: CSSProperties["margin"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const LogoImazai: FunctionComponent<LogoImazaiType> = ({
  className = "",
  withText = true,
  propPosition,
  propTop,
  propLeft,
  zapFast,
  propHeight,
  propWidth,
  propMinHeight,
  propFlex,
  propFontSize,
  propFontFamily,
  propColor,
  propMargin,
  propFontWeight,
}) => {
  const logoImazaiStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  const zapFastIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      minHeight: propMinHeight,
    };
  }, [propHeight, propWidth, propMinHeight]);

  const imazaiStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      fontSize: propFontSize,
      fontFamily: propFontFamily,
      color: propColor,
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [
    propFlex,
    propFontSize,
    propFontFamily,
    propColor,
    propMargin,
    propFontWeight,
  ]);

  return (
    <div className={`logo-imazai ${className}`} style={logoImazaiStyle}>
      <img
        className="zap-fast-icon"
        alt=""
        src={zapFast}
        style={zapFastIconStyle}
      />
      {withText && (
        <b className="imazai" style={imazaiStyle}>
          GenGreetingAi
        </b>
      )}
    </div>
  );
};

export default LogoImazai;
