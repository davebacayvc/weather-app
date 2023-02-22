import React from "react";
import WeatherSearch from "./components/WeatherSearch";
import WelcomeMessage from "./components/WelcomeMessage";
import "./Home.scss";

const Home: React.FC = () => {
  const isLoggedIn = true;
  return (
    <div className="home-container">
      {!isLoggedIn ? <WelcomeMessage /> : <WeatherSearch />}
    </div>
  );
};

export default Home;
