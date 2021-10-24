import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="col-12">
      <div className="welcome">
        <h1 className="greeting">Welcome!</h1>

        <div className="row">
          <div className="col-10">
            <form className="city-form">
              <input
                type="text"
                placeholder="Enter your city :"
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
