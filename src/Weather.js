import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("Vancouver");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(event.target[0].value);
  };

  if (loaded) {
    return (
      <div>
        <div>
          <form
            className="weather-search"
            id="weather-search"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control search-input"
                  id="search-input"
                  // onClick={handleSubmit}
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
        </div>
        <WeatherInfo weather={weather} city={city} />
      </div>
    );
  } else {
    const apiKey = "ce7f3cb6658fc606e9cb42397a4c2dd1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
