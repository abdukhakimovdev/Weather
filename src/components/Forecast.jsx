import React from "react"; 

// Forecast komponenti, bu komponent 5 kunlik ob-havo ma’lumotlarini qabul qiladi
const Forecast = ({ forecast }) => { 

    // Ob-havo turiga qarab emoji qaytaruvchi funksiya
    const getWeatherIcon = (weather) => { 
      switch (weather) {
        case "Clear":  
          return "☀️";
        case "Clouds": 
          return "☁️";
        case "Rain":   
          return "🌧";
        case "Snow":   
          return "❄️";
        default:       
          return "🌡";
      }
    };
  
    return (
      <div className="forecast"> 
        <h3>📅 5 kunlik prognoz</h3> 

        <div className="forecast-container">
          {forecast.map((day, index) => ( // forecast massivini xaritalash
            <div key={index} className="forecast-day"> {/* Har bir kun uchun kartochka */}
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p> {/* UNIX vaqtini o‘qilishi oson sanaga o‘zgartirish */}
              <p>{getWeatherIcon(day.weather[0].main)}</p> {/* Ob-havo turiga mos emoji chiqarish */}
              <p>{day.main.temp}°C</p> {/* Haroratni chiqarish */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Forecast;