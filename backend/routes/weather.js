const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/",async (req,res)=>{

    try{
        const city = req.query.city;

        if(!city)
        {
            res.status(400).json({
                message:"City is Required"
            })
        }

        const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=yes`;

        const response = await axios.get(url);
        const weatherData = response.data;

        const formattedData = {

            city: weatherData.location.name,
            country: weatherData.location.country,
            temperature: Math.round(weatherData.current.temp_c),
            feelsLike: Math.round(weatherData.current.feelslike_c),
            condition: weatherData.current.condition.text,
            humidity: weatherData.current.humidity,
            windSpeed: weatherData.current.wind_kph,
            api: weatherData.current.air_quality
        }

        res.json(formattedData);

    }
    catch(err)
    {
        res.status(500).json({
            message: "Unable to connect to weather service"
        })

    }
})

module.exports = router;