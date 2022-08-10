import React from "react";
import { useState } from "react";
import axios from "axios";
import CurrentDate from {./CurrentDate};

export default function Header(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
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

  if (loaded) {
    return (
      <div className="Header">
        <div className="row">
          <div className="col-3 conditions">
            <p>
              Feels Like <span className="feels-like">{weather.feelsLike}</span>
              °
              <br />
              <i className="fa fa-solid fa fa-wind"></i>
              <span className="wind-speed"></span> {weather.windSpeed}MPH
              <br />
              <i className="fa fa-solid fa fa-droplet"></i>
              <span className="humidity"> {weather.humidity}</span>%
            </p>
          </div>

          <div className="col-6 today">
            <h6>
              <CurrentDate date={weather.date} />
            </h6>
            <h1>{props.defaultCity}</h1>
            <h2>
              <span className="temp"></span>
              {weather.temperature}°<span className="temp-mode">F</span>
            </h2>
            <h3>
              <img
                src={weather.icon}
                alt={weather.conditions}
                className="main-icon"
              />
              <span className="description">{weather.conditions}</span>
            </h3>
          </div>

          <div className="col-3 range">
            <div className="row">
              <div className="col-5 divider">
                <p>
                  High
                  <br />
                  <span className="max-temp">{weather.highTemp}</span>°F
                </p>
              </div>
              <div className="col-5 low-temp">
                <p>
                  Low
                  <br />
                  <span className="min-temp">{weather.lowTemp}</span>°F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e5563a39d3909663bfcb47fa3fa4fa5e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);

    return "Fetching data...";
  }
}
