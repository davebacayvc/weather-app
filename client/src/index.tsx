import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
