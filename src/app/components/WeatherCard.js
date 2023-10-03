"use client"
import styles from "./WeatherCard.module.css"

const WeatherCard = ({
    cityName, 
    cloudiness,
    currentTemparature,
    weatherType,
    highTemperature,
    lowTemperature,
    humidity,
    windSpeed,
}) => (
    <div className={styles.WeatherCardWrapper}>
        <h2>{cityName}</h2>

        <p>Weather Type: {weatherType} </p>
        <p>Current Temperature: {currentTemparature} °C</p>
        <p>High Temperature: {highTemperature} °C</p>
        <p>Low Temperature: {lowTemperature} °C</p>
        <p>Cloudiness: {cloudiness}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {windSpeed}</p>
    </div>
)

export default WeatherCard;