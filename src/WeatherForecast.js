// import React, { useState } from "react";
// import WeatherIcon from "./WeatherIcon";
// import axios from "axios";

export default function WeatherForecast(props) {
  return "Hello";
  // console.log("WeatherForecast props", props);
  // let [loaded, setLoaded] = useState(false);
  // let [forecast, setForecast] = useState(null);

  // function handleResponse(res) {
  //   console.log("Forecast res", res);
  //   setForecast(res.data.daily);
  //   setLoaded(true);
  // }
  // if (loaded) {
  //   return (
  //     <div className="weather-forecast" id="weather-forecast">
  //       <div class="col-2 forecast-day flex-column">
  //         <div>Mon</div>
  //         <img
  //           class="forecasted-weather-icon"
  //           src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  //           alt="clear"
  //         />
  //         <div class="forecast-temperature">
  //           <span>15°</span>
  //           <span>20°</span>
  //         </div>
  //         {forecast}
  //       </div>
  //     </div>
  //   );
  // } else {
  //   const apiKey = "ce7f3cb6658fc606e9cb42397a4c2dd1";
  //   let longitude = props.weather.coordinates.lon;
  //   let latitude = props.weather.coordinates.lat;
  //   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  //   axios.get(apiUrl).then(handleResponse);

  //   return null;
  // }
}
