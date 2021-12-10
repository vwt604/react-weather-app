import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  const showWeather = (res) => {
    setWeather({
      temperature: res.data.main.temp,
      description: res.data.weather[0].description,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      icon: res.data.weather[0].icon,
      date: res.data.dt,
      feelsLike: res.data.main.feels_like,
    });
    setLoaded(true);
    console.log(res);
  };

  if (loaded) {
    return (
      <div>
        <form className="weather-search" id="weather-search">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                id="search-input"
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                className="btn btn-primary w-100 search-btn"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="weather">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{props.city}</h1>
              <ul className="normal">
                <li>
                  <span className="weather-condition">
                    {weather.description}
                  </span>
                </li>
                <li>
                  <span>
                    Feels like:{" "}
                    <span className="weather-feels-like">
                      {Math.round(weather.feelsLike)}°C
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
                  src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt="clear"
                />
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ce7f3cb6658fc606e9cb42397a4c2dd1";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
