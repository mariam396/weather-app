// ✅ Fix #4: Removed non-existent Forecast.css import
function Forecast({ data }) {
  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast">
        {data.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>{day.weather[0].main}</p>
            <p>Temp: {Math.round(day.main.temp)}°C</p>
            <p>Feels like: {Math.round(day.main.feels_like)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;