import WeatherCard from "@/app/components/WeatherCard";
import "../app/globals.css";

export async function getStaticProps() {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const weatherData = await res.json();

    return {
        props: {
            weatherData,
        },
    };
}


export default function Home ({weatherData}) {
    console.log(weatherData);
    return (
        <main>
            <h1>Weather App</h1>
            <WeatherCard 
            cityName={weatherData.name}
            weatherType={weatherData.weather[0].main}
            currentTemparature={weatherData.main.temp}
            highTemperature={weatherData.main.temp_max}
            lowTemperature={weatherData.main.temp_min}
            cloudiness={weatherData.clouds.all}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            />
        </main>
    );
}