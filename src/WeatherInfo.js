import React from "react";

export default function WeatherInfo(props) {
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
              Last updated: <span className="time">Friday 15:49</span>
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
            <span className="temperature">
              {Math.round(props.weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
