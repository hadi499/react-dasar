import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import NavbarComponent from "./Navbar";

ReactDOM.render(
  <React.StrictMode>
    <NavbarComponent />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
