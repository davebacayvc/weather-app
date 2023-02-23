import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const WeatherSearch = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const searchHandler = () => {
    navigate("/weather/" + inputValue);
  };
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="primary" onClick={searchHandler}>
          Display Weather
        </Button>
      </div>
    </div>
  );
};

export default WeatherSearch;
