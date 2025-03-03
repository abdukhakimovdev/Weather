import React from "react";
const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>🌡 Harorat: {weather.main.temp}°C</p>
      <p>🌬 Shamol tezligi: {weather.wind.speed} m/s</p>
      <p>💧 Namlik: {weather.main.humidity}%</p>
      <p>📝 {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
