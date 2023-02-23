import React, { useEffect, useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WelcomeMessage from "./components/WelcomeMessage";
import "./Home.scss";

const Home: React.FC = () => {
  const isLoggedIn = true;
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);

    if (codeParam && !localStorage.getItem("accessToken")) {
      console.log("test");
      const getAccessToken = async () => {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("accessToken", data.access_token);
            setRerender((prevState) => !prevState);

            console.log(data);
          });
      };

      getAccessToken();
    }
  }, []);
  return (
    <div className="home-container">
      {!isLoggedIn ? <WelcomeMessage /> : <WeatherSearch />}
    </div>
  );
};

export default Home;
