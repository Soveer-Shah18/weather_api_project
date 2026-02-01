import axios from "axios";

const getWeather = async (city)=>{

    const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
    return response.data;
}

export {getWeather};