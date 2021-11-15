import React from "react";
import FormattedDate from "./FormattedDate";
import Sunset from "./Sunset";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="col-6">
        <div className="result">
          <WeatherTemperature celsius={props.data.temperature} />

          <div className="current-city"> {props.data.city} </div>
          <div className="current-day">
            <FormattedDate date={props.data.date} />{" "}
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="weather-details">
          <div className="weather-icon">
            <WeatherIcons code={props.data.icon} />
          </div>
          <ul className="details">
            <li className="text-capitalize">{props.data.description}</li>
            <li className="humidity">
              Humidity: {Math.round(props.data.humidity)}%
            </li>
            <li className="wind">Wind: {Math.round(props.data.wind)}km/h</li>
            <li className="sunset">
              <Sunset time={props.data.sunset} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
