import React, { useState } from "react";

export default function Temperature(props) {
  return (
    <div className="temperature-container d-flex justify-content-end">
      <span className="temperature">{props.temperature}</span>
      <span className="unit">°C</span>
    </div>
  );
}
