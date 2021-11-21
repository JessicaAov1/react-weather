import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

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
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
    console.log(response.data);
  }
  //access the city that was typed in the form
  function updateCity(event) {
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
          <button className="current-location" onClick={currentData}>
            My location
          </button>
        </div>
      </div>
    </div>
  );
  function showPosition(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "9ca6c562062d122440b16668ce916487";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }
  function currentData(position) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weather.loaded) {
    return (
      <div>
        <div className="col-12">
          <h2> {form}</h2>
        </div>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
