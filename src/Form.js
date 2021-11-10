import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Sunset from "./Sunset";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  // retrieve and render weather data from the API
  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunset: new Date(response.data.sys.sunset * 1000),
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }
  //access the city that was typed in the form
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    console.log(city);
  }
  function search() {
    const apiKey = `9ca6c562062d122440b16668ce916487`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  let form = (
    <div className="welcome">
      <h1 className="greeting">Welcome!</h1>

      <div className="row">
        <div className="col-10">
          <form className="city-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your city ..."
              onChange={updateCity}
              autoFocus="on"
              autoComplete="off"
              className="search-city-input"
            />
            <input type="submit" className="search-form" value="Search" />
          </form>
        </div>
        <div className="col-2">
          <button className="current-location">My location</button>
        </div>
      </div>
    </div>
  );

  if (weather.loaded) {
    return (
      <div>
        <div className="col-12">
          <h2> {form}</h2>
        </div>
        <div className="col-6">
          <div className="result">
            <span className="current-temperature">
              {" "}
              {Math.round(weather.temperature)}
            </span>
            <span className="temperature-celsius">
              °C /{" "}
              <button type="button" className="link-button">
                F
              </button>
            </span>
            <p className="current-city"> {weather.city} </p>
            <p className="current-day">
              <FormattedDate date={weather.date} />{" "}
            </p>
          </div>
        </div>

        <div className="col-3">
          <div className="weather-details">
            <ul className="details">
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
              <li className="text-capitalize">{weather.description}</li>
              <li className="humidity">
                Humidity: {Math.round(weather.humidity)}%
              </li>
              <li className="wind">Wind: {Math.round(weather.wind)}km/h</li>
              <li className="sunset">
                <Sunset time={weather.sunset} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
