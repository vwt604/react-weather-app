import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(res) {
    console.log("forecast res", res.data);
    setForecast(res.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log("forecast", forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "bdb49ae35d26b65f17ef6808d4baab94";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lat}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
