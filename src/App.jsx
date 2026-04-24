import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import Forecast from "./components/Forecast.jsx";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const fetchWeather = async (location) => {
    try {
      setError("");

      const res = await axios.post("/api/weather", { location });

      setWeather(res.data.weather);
      setForecast(res.data.forecast);

    } catch (err) {
      setError("City not found or API error.");
      setWeather(null);
      setForecast([]);
    }
  };

  return (
    <div className="app">
      <h1>Weather App 🌤️</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
}

export default App;