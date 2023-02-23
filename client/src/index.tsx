import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import { REACT_ROUTES } from "./constants/constants";
import "./index.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {REACT_ROUTES.map((route) => (
          <Route path={route.PATH} element={route.ELEMENT} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
