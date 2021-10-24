import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import Weather from "./Weather";
import Details from "./Details";
import "./Body.css";

export default function Body() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="row">
          <Form />
        </div>

        <div className="row">
          <Details />
          <Weather />
          <div className="nextDays"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
