import classNames from "classnames";
import React from "react";
import "./Input.scss";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const inputClassnames = classNames("input", props.className);
  return <input {...props} className={inputClassnames} />;
};

export default Input;
