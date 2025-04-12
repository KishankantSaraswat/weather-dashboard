import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ setWeatherData, setLoading, setError }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;