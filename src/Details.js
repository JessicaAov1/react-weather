import React from "react";
import "./Details.css";

export default function Details() {
  let weatherDetails = {
    description: "Sunny",
    humidity: "80%",
    wind: "11",
    sunset: " 8pm UTC+1",
  };
  return (
    <div className="col-3">
      <div className="weather-details">
        <div className="clearfix weather-icon">
          <img
            src=" https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            className="float-left icon"
          />
        </div>

        <ul className="details">
          <li className="description">{weatherDetails.description}</li>
          <li className="humidity">Humidity: {weatherDetails.humidity}</li>
          <li className="wind">Wind: {weatherDetails.wind}km/h</li>
          <li className="sunset">Sunset:{weatherDetails.sunset}</li>
        </ul>
      </div>
    </div>
  );
}
