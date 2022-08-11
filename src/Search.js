import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      conditions: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchLocation() {
    let apiKey = "0387dd01a84f39d46546057afddb0a26";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchLocation();
  }

  function fetchCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="location"
            placeholder="Type a location"
            onChange={fetchCity}
          />
          <input type="submit" value="Search" className="search-button ms-1" />
        </form>
        <Header data={weather} />
        <Forecast coordinates={weather.coordinates} />;
      </div>
    );
  } else {
    searchLocation();
    return "Fetching data...";
  }
}
