import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState(props.temperature);

  const setCelcius = (e) => {
    e.preventDefault();
    setUnit(props.temperature);
  };

  const toFarenheit = (temp) => {
    return Math.round(temp * (9 / 5) + 32);
  };

  const setFarenheit = (e) => {
    e.preventDefault();
    setUnit(toFarenheit(props.temperature));
  };
  return (
    <div className="temperature-container d-flex justify-content-end">
      <span className="temperature">{unit}°</span>
      <span className="unit">
        {" "}
        <a href="/" onClick={setCelcius}>
          C
        </a>{" "}
        <a href="/" onClick={setFarenheit}>
          F
        </a>
      </span>
    </div>
  );
}
