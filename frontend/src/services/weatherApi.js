import axios from "axios";

const getWeather = async (city)=>{

    const response = await axios.get(`https://weather-api-project-dceu.onrender.com/api/weather?city=${city}`);
    return response.data;
}

export {getWeather};