import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

const App = () => (
  <div className="container">
    <div className="weather-app-wrapper">
      <Weather city="Nairobi" />
      <Footer />
    </div>
  </div>
);

export default App;
