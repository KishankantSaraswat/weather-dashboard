import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
import WeatherCard from './components/WheatherCard'
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <h1>Weather Dashboard</h1>
        <SearchBar 
          setWeatherData={setWeatherData} 
          setLoading={setLoading} 
          setError={setError} 
        />
        
        {loading && <div className="loader">Loading...</div>}
        
        {error && <div className="error-message">{error}</div>}
        
        {weatherData && !loading && !error && (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;