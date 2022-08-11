import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function windSpeed() {
    let wind = Math.round(props.data.wind_speed);
    return `${wind} MPH`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="row five-day">
      <div className="col-3 days">
        <p className="weekday">{day()}</p>
      </div>
      <div className="col-4 temps">
        <p className="weekday">
          {maxTemp()} / {minTemp()} <img src={icon} alt="" />
        </p>
      </div>
      <div className="col-2 dew-point">
        <p className="weekday">
          <i className="fa-solid fa-droplet"></i> {props.data.humidity}%
        </p>
      </div>
      <div className="col-3 wind">
        <p className="weekday">
          <i className="fa-solid fa-wind"></i> {windSpeed()}
        </p>
      </div>
    </div>
  );
}
