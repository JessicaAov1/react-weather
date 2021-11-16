import React from "react";
import "./Forecast.css";
import WeatherIcons from "./WeatherIcons";

export default function Forecast() {
  return (
    <div className="col-3">
      <div className="nextDays">
        <div className="card first-day">
          <div className="card-body">
            <span className="card-title icon">
              <WeatherIcons code="01n" size={30} />
            </span>
            <span className="card-text day1"> Fri </span>
            <span className="temperature-min">10° | </span>{" "}
            <span className="temperature-max">18°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
