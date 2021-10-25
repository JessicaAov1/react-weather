import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);

  function displayWeather(reponse) {
    setLoaded(true);
    setWeather({
      city: reponse.data.main.name,
      temperature: reponse.data.main.temp,
      description: reponse.data.weather[0].description,
      humidity: reponse.data.main.humidity,
      wind: reponse.data.wind.speed,
      sunset: reponse.data.sys.sunset,
    });
    console.log(reponse.data);
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
              placeholder="Enter your city :"
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
            <p className="current-day"> monday</p>
            <p className="current-time"> 13h00</p>
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
    return <h2>{form}</h2>;
  }
}
