import { GITBHU_CLIENT_ID } from "../constants/constants";

const githubLogin = () => {
  const url =
    "https://github.com/login/oauth/authorize" +
    "?client_id=" +
    GITBHU_CLIENT_ID;
  window.location.assign(url);
};

export default githubLogin;
