import React from "react";
import CurrentDate from "./CurrentDate";
import Conversion from "./Conversion";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-3 conditions">
          <p>
            Feels Like{" "}
            <span className="feels-like">{props.data.feelsLike}</span>
            °
            <br />
            <i className="fa fa-solid fa fa-wind"></i>
            <span className="wind-speed"></span> {props.data.windSpeed}MPH
            <br />
            <i className="fa fa-solid fa fa-droplet"></i>
            <span className="humidity"> {props.data.humidity}</span>%
          </p>
        </div>

        <div className="col-6 today">
          <h6>
            <CurrentDate date={props.data.date} />
          </h6>
          <h1>{props.data.city}</h1>
          <Conversion fahrenheit={props.data.temperature} />
          <h3>
            <img
              src={props.data.icon}
              alt={props.data.conditions}
              className="main-icon"
            />
            <span className="description">{props.data.conditions}</span>
          </h3>
        </div>

        <div className="col-3 range">
          <div className="row">
            <div className="col-5 divider">
              <p>
                High
                <br />
                <span className="max-temp">{props.data.highTemp}</span>°F
              </p>
            </div>
            <div className="col-5 low-temp">
              <p>
                Low
                <br />
                <span className="min-temp">{props.data.lowTemp}</span>°F
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
