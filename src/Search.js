import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

export default function Search(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      conditions: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchLocation() {
    let apiKey = "e5563a39d3909663bfcb47fa3fa4fa5e";
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

  if (weather.loaded) {
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
      </div>
    );
  } else {
    searchLocation();
    return "Fetching data...";
  }
}
