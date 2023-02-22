import React, { useEffect } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WelcomeMessage from "./components/WelcomeMessage";
import "./Home.scss";

const Home: React.FC = () => {
  const isLoggedIn = false;

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);
  return (
    <div className="home-container">
      {!isLoggedIn ? <WelcomeMessage /> : <WeatherSearch />}
    </div>
  );
};

export default Home;
