import {use, useState} from "react";
import {getWeather} from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import "./App.css"

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  

  const fetchWeather = async ()=>{

    try{

      setError("");
      const data = await getWeather(city);
      setWeather(data);

    }
    catch(err){

      setError("Unable to connect to weather service. Please try again");
      setWeather(null);
    }
  }

  return(

    <div  className="app" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather Finder</h2>

      <input placeholder="Enter city or Country" value={city} onChange={(e)=> setCity(e.target.value)}
      />

      <br></br>

      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style= {{color:"red"}}>{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>

  )
}

export default App;