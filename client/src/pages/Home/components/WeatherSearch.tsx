import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const WeatherSearch = () => {
  return (
    <div className="weather-search-container">
      <div className="user-info">
        <h2>John Smith</h2>
        <p>https://github.com</p>
      </div>
      <div className="weather-search">
        <Input
          type="text"
          className="search-input"
          placeholder="Search a city..."
        />
        <Button variant="primary">Display Weather</Button>
      </div>
    </div>
  );
};

export default WeatherSearch;
