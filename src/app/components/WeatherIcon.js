'use-client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCloud,
    faUmbrella,
    faSnowflake,
    faSun,
    faDroplet,
    faCloudRain,
    faWater,
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({weatherType}) => {
    switch(weatherType) {
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} beatFade style={{color: "#77d0fd",}} />;
        case "Clear":
            return <FontAwesomeIcon icon={faSun} beatFade style={{color: "#fff94d",}} />;
        case "Drizzle":
            return <FontAwesomeIcon icon={faDroplet} beatFade style={{color: "#59adee",}} />;
        case "Rain":
            return <FontAwesomeIcon icon={faCloudRain} beatFade style={{color: "#2e6ddc",}} />;
        case "Snow":
            <FontAwesomeIcon icon={faSnowflake} bounce style={{color: "#b3f6ff",}} />;
        case "Haze":
            return <FontAwesomeIcon icon={faCloud} />;
        case "Mist":
            return <FontAwesomeIcon icon={faWater} fade style={{color: "#bb94f4",}} />;
        default:
            return <FontAwesomeIcon icon="faCloud" />;
    }
}

export default WeatherIcon;