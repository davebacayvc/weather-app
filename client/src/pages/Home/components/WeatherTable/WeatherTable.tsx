import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import "./WeatherTable.scss";

const WeatherTable: React.FC = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const [weather, setWeather] = useState<any>({});

  useEffect(() => {
    const getWeather = async () => {
      const API_KEY = "f846b4a729a0ee45951ebe62fade08d3";
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      const response = await fetch(endpoint);
      const result = await response.json();
      setWeather(result);
    };

    getWeather();
  }, [city]);
  console.log(weather);

  const isWeatherRendered = Object.keys(weather).length !== 0;

  if (!isWeatherRendered) {
    return <p className="weather-label">Loading..</p>;
  }

  const noInfo = weather?.cod === "404";

  return (
    <div className="weather-container">
      {isWeatherRendered && !noInfo ? (
        <table>
          <tr>
            <th>Date</th>
            <th>Temp</th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
          <tr>
            <td>
              {new Date(
                weather?.dt * 1000 - weather.timezone * 1000
              ).toLocaleDateString()}
            </td>
            <td>{weather?.main.temp}</td>
            <td>{weather?.weather[0]?.description}</td>
            <td>{weather?.weather[0]?.main}</td>
            <td>{weather?.main.pressure}</td>
            <td>{weather?.main.humidity}</td>
          </tr>
        </table>
      ) : (
        <p className="weather-label">No information to display.</p>
      )}
      <div className="weather-actions">
        <Button variant="primary" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default WeatherTable;
