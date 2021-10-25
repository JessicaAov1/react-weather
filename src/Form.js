import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="col-12">
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
    </div>
  );
}
