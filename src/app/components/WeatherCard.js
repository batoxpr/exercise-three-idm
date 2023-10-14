"use client"
import styles from "./WeatherCard.module.css";
import Header from "./Header";
import WeatherIcon from "./WeatherIcon";

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
    <div className={styles.WeatherCardWrapper}
    /* style={{ backgroundColor: `rgba(0,0,0,0.${cloudiness}`}}*/> 
        <div className={styles.WeatherCardImage}>
            <WeatherIcon weatherType={weatherType} />
        </div>

        <h2>{cityName}</h2>

        <p>Weather Type: {weatherType} </p>
        <p>Current Temperature: {currentTemparature} °F</p>
        <p>High Temperature: {highTemperature} °F</p>
        <p>Low Temperature: {lowTemperature} °F</p>
        <p>Cloudiness: {cloudiness}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {windSpeed}</p>
    </div>
)

export default WeatherCard;