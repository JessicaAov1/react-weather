import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function temperatureMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="nextDays">
      <div className="card next-days">
        <div className="card-body">
          <span className="card-title icon">
            <WeatherIcons code={props.data.weather[0].icon} size={25} />
          </span>
          <span className="card-text day"> {day()}</span>
          <br />
          <span className="temperature-min">{temperatureMin()}° | </span>{" "}
          <span className="temperature-max">{temperatureMax()}°</span>
        </div>
      </div>
    </div>
  );
}
