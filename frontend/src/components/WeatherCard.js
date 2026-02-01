const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h3>
        📍 {weather.city}, {weather.country}
      </h3>

      <p>🌡Temperature: {weather.temperature}°C</p>
      <p>🤔 Feels Like: {weather.feelsLike}°C</p>
      <p>☁ Condition: {weather.condition}</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>🌬 Wind Speed: {weather.windSpeed} km/h</p>
    </div>
  );
};

export default WeatherCard;
