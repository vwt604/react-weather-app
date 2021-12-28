import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  let temperature = Math.round(props.weather.temperature);

  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <h1 className="city">{props.weather.city}</h1>
          <ul className="normal">
            <li>
              <span className="weather-condition">
                {props.weather.description}
              </span>
            </li>
            <li>
              <span>
                Feels like:{" "}
                <span className="weather-feels-like">
                  {Math.round(props.weather.feelsLike)}°C
                </span>
              </span>
            </li>
            <li>
              Last updated: <FormattedDate date={props.weather.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${props.weather.icon}.png`}
              alt="clear"
            />
            <Temperature temperature={temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
