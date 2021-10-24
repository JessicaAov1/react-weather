import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: "20",
    city: "Lisbon",
    day: "Saturday, September 25",
    time: "15:00",
  };

  return (
    <div className="col-6">
      <div className="result">
        <span className="current-temperature"> {weatherData.temperature}</span>
        <span className="temperature-celsius">°C</span>
        <p className="current-city">{weatherData.city}</p>
        <p className="current-day">{weatherData.day}</p>
        <p className="current-time">{weatherData.time}</p>
      </div>
    </div>
  );
}
