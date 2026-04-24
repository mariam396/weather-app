function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>{data.weather[0].main}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;