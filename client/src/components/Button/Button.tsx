import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = (props) => {
  const buttonClassnames = classNames("button", {
    "button-primary": props.variant === "primary",
    "button-secondary": props.variant === "secondary",
  });
  return (
    <button {...props} className={buttonClassnames}>
      {props.children}
    </button>
  );
};

export default Button;
