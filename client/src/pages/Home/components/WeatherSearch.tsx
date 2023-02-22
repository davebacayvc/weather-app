import React from "react";
import Button from "../../../components/Button/Button";

const WeatherSearch = () => {
  return (
    <div className="weather-search-container">
      <div className="user-info">
        <h2>John Smith</h2>
        <p>https://github.com</p>
      </div>
      <div className="weather-search">
        <input type="text" />
        <Button variant="secondary">Dispaly Weather</Button>
      </div>
    </div>
  );
};

export default WeatherSearch;
