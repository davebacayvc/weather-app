import React from "react";
import Button from "../components/Button/Button";
import ComponentValidator from "../components/ComponentValidator/ComponentValidator";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src="/assets/weather-app-logo.png" />
        <div className="navbar-brand-name">Weather Forecast</div>
      </div>
      <ComponentValidator showNull={false}>
        <div className="navbar-actions">
          <Button variant="secondary">Login</Button>
        </div>
      </ComponentValidator>
    </div>
  );
};

export default Navbar;
