import React from "react";

export default function Weather(props) {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <h1 className="city">{props.city}</h1>
          <ul className="normal">
            <li>
              <span className="weather-condition"></span>
            </li>
            <li>
              <span>
                Feels like: <span className="weather-feels-like">13°C</span>
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
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="clear"
            />
            <span className="temperature">{props.temperature}</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
