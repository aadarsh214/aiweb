import { FunctionComponent } from "react";
import "./TextInput.css";

export type TextInputType = {
  className?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  hintText?: boolean;
  label?: boolean;
};

const TextInput: FunctionComponent<TextInputType> = ({
  className = "",
  iconRight = false,
  iconLeft = true,
  hintText = false,
  label = false,
}) => {
  return (
    <div className={`text-input ${className}`}>
      {label && (
        <div className="label6">
          <div className="text">Label</div>
        </div>
      )}
      <div className="input">
        {iconLeft && <img className="flash-icon" alt="" src="/flash.svg" />}
        <input
          className="label7"
          placeholder="Ex : background abstract with blue color"
          type="text"
        />
        {iconRight && <img className="eye-icon" alt="" src="/eye@2x.png" />}
      </div>
      {hintText && (
        <div className="hint-text">
          <div className="hint-text1">This is a hint text to help user</div>
        </div>
      )}
    </div>
  );
};

export default TextInput;
