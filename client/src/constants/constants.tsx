import Wrapper from "../components/Wrapper";
import WeatherTable from "../pages/Home/components/WeatherTable/WeatherTable";
import Home from "../pages/Home/Home";

export const APP_NAME = "Weather Forecast";
export const GITBHU_CLIENT_ID = "d99d85b8cba1733c4116";

export const REACT_ROUTES = [
  {
    ELEMENT: (
      <Wrapper>
        <Home />
      </Wrapper>
    ),
    PATH: "/",
  },
  {
    ELEMENT: (
      <Wrapper>
        <WeatherTable />
      </Wrapper>
    ),
    PATH: "/weather/:city",
  },
];
