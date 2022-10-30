import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import "./Body.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Body() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="row">
          <Form defaultCity="Lisbon" />
        </div>

        <div className="row">
          <div className="nextDays"></div>
        </div>
      </div>
      <div className="row"> </div>

      <Footer />
    </div>
  );
}
