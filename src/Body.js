import React from "react";
import Footer from "./Footer";
import Form from "./Form";

import "./Body.css";

export default function Body() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="row">
          <Form />
        </div>

        <div className="row">
          <div className="nextDays"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
