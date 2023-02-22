import React from "react";
import Button from "../../../components/Button/Button";
import { APP_NAME } from "../../../constants/constants";
import githubLogin from "../../../helpers/loginGithub";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="welcome-message">
      <h1>
        Welcome to the {APP_NAME} web application. Please login with your Github
        user to use the application and view the weather in your city.
      </h1>
      <Button variant="secondary" onClick={() => githubLogin()}>
        Login
      </Button>
    </div>
  );
};

export default WelcomeMessage;
