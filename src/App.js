import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

const App = () => (
  <div className="container">
    <div className="weather-app-wrapper">
      <Form />
      <Weather city="Vancouver" temperature="15" />
      <WeatherForecast />
      <Footer />
    </div>
  </div>
);

export default App;
