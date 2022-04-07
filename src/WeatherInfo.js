import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherInfo.css";


export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="overview">
          <h1 id="city">{props.data.city}</h1>
          <ul>
            <li>
            <span id="date"><FormattedDate date={props.data.date}/></span>
            </li>
            <li className= "text-capitalize" id="description">{props.data.description}</li>
          </ul>
        </div>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex weather-temperature">
                <div className="float-left" id="mainIcon"> 
                <WeatherIcon data={props.data.icon} alt={props.data.description} />
                </div>
                <div className="float-left">
                    <WeatherTemperature fahrenheit={props.data.temperature} />
                </div>
              </div>
            </div>
            <div className="col-md-6" >
              <ul>
              <span className="weatherInfo">
                <li>
                  Feels Like: <span id="feels-like">{props.data.feel}</span> °F
                </li>
                <li>
                  Humidity: <span id="humidity">{props.data.humidity}</span> %
                </li>
                <li>
                  Wind: <span id="wind">{props.data.wind}</span> mph
                </li>
              </span>
              </ul>
            </div>
          </div>
        </div>
    );
}