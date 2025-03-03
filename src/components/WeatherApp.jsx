import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const weatherData = await weatherResponse.json();
      if (weatherData.cod !== 200) {
        alert("Shahar topilmadi! " + weatherData.message);
        return;
      }
      setWeather(weatherData);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastResponse.json();
      setForecast(forecastData.list.filter((_, index) => index % 8 === 0));
    } catch (error) {
      console.error("API xatosi:", error);
    }
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <h1>🌤 Ob-Havo Ilovasi</h1>
        <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherInfo weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
};

export default WeatherApp;
