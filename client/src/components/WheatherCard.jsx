import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  const {
    city,
    country,
    temperature,
    description,
    icon,
    humidity,
    windSpeed,
    feelsLike
  } = weatherData;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{city}, {country}</h2>
        <div className="weather-icon">
          <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={description} 
          />
          <p>{capitalizeFirstLetter(description)}</p>
        </div>
      </div>
      
      <div className="weather-info">
        <div className="temperature">
          <h3>{Math.round(temperature)}°C</h3>
          <p>Feels like: {Math.round(feelsLike)}°C</p>
        </div>
        
        <div className="details">
          <div className="detail-item">
            <p>Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="detail-item">
            <p>Wind Speed</p>
            <p>{windSpeed} m/s</p>
          </div>
        </div>
      </div>
      
      <div className="weather-footer">
        <p>Last updated: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default WeatherCard;