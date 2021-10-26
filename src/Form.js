import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunset: response.data.sys.sunset,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `9ca6c562062d122440b16668ce916487`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
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

  if (loaded) {
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
            <span className="temperature-celsius">°C</span>
            <p className="current-city"> {weather.city} </p>
            <p className="current-day"> Tuesday, October 26th </p>
            <p className="current-time"></p>
          </div>
        </div>

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
              <li className="description">{weather.description}</li>
              <li className="humidity">
                Humidity: {Math.round(weather.humidity)}%
              </li>
              <li className="wind">Wind: {Math.round(weather.wind)}km/h</li>
              <li className="sunset">Sunset:{weather.sunset}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="col-12">
          <h2> {form}</h2>
        </div>
        <div className="col-6">
          <div className="result">
            <span className="current-temperature">19</span>
            <span className="temperature-celsius">°C</span>
            <p className="current-city">London </p>
            <p className="current-day">{weather.date}</p>
            <p className="current-time">15:00</p>
          </div>
        </div>

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
              <li className="description">Sunny</li>
              <li className="humidity">Humidity : 80%</li>
              <li className="wind">Wind: 4km/h</li>
              <li className="sunset">Sunset:20:00</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
