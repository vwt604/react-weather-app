import React from "react";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast" id="weather-forecast">
      <div class="col-2 forecast-day flex-column">
        <div>Mon</div>
        <img
          class="forecasted-weather-icon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="clear"
        />
        <div class="forecast-temperature">
          <span>15°</span>
          <span>20°</span>
        </div>
      </div>
    </div>
  );
}
