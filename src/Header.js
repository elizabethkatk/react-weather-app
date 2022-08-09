import React from "react";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-3 conditions">
          <p>
            Feels Like <span className="feels-like">{props.feelsLike}</span>°
            <br />
            <i className="fa fa-solid fa fa-wind"></i>
            <span className="wind-speed"></span> {props.windSpeed}MPH
            <br />
            <i className="fa fa-solid fa fa-droplet"></i>
            <span className="humidity"> {props.humidity}</span>%
          </p>
        </div>

        <div className="col-6 today">
          <h6>
            <span className="date">{props.date}</span>
            <br />
            <span className="time">{props.time}</span>
            <span className="timezone">(GMT-5)</span>
          </h6>
          <h1>{props.city}</h1>
          <h2>
            <span className="temp"></span>
            {props.temperature}°<span className="temp-mode">F</span>
          </h2>
          <h3>
            <img src="" alt="" className="main-icon" />
            <span className="description">{props.conditions}</span>
          </h3>
        </div>

        <div className="col-3 range">
          <div className="row">
            <div className="col-5 divider">
              <p>
                High
                <br />
                <span className="max-temp">{props.highTemp}</span>°F
              </p>
            </div>
            <div className="col-5 low-temp">
              <p>
                Low
                <br />
                <span className="min-temp">{props.lowTemp}</span>°F
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
