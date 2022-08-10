import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <h2>
        <span className="temp"></span>
        {Math.round(props.fahrenheit)}°
        <span className="temp-mode">
          F |{" "}
          <a href="/" className="current-unit" onClick={showCelsius}>
            C
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        <span className="temp"></span>
        {Math.round(celsius())}°
        <span className="temp-mode">
          <a href="/" className="current-unit" onClick={showFahrenheit}>
            F
          </a>{" "}
          | C
        </span>
      </h2>
    );
  }
}
