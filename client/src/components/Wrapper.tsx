import React from "react";
import Navbar from "../layouts/Navbar";

type WrapperProps = {
  children: React.ReactNode;
};
const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <div className="main-wrapper">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Wrapper;
