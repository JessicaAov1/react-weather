import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="col-3">
      <div className="nextDays">
        <div className="card first-day">
          <div className="card-body">
            <h5 className="card-title day1">Friday</h5>
            <p className="card-text temp1">🌤 18°C</p>
          </div>
        </div>

        <div className="card second-day">
          <div className="card-body">
            <h5 className="card-title day2">Saturday</h5>
            <p className="card-text temp2">🌤 18°C</p>
          </div>
        </div>

        <div className="card third-day">
          <div className="card-body">
            <h5 className="card-title day2">Saturday</h5>
            <p className="card-text temp2">🌤 18°C</p>
          </div>
        </div>

        <div className="card fourth-day">
          <div className="card-body">
            <h5 className="card-title day2">Saturday</h5>
            <p className="card-text temp2">🌤 18°C</p>
          </div>
        </div>

        <div className="card fifth-day">
          <div className="card-body">
            <h5 className="card-title day2">Saturday</h5>
            <p className="card-text temp2">🌤 18°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
