import React, { useEffect, useState } from 'react';

import CityCountry from './CityCountry.js';
import Icon from './Icon.js';

const Request = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState('');
    const [temperature, setTemperature] = useState('');
    const [degrees, setDegrees] = useState('');
    const [button, setButton] = useState('');
    const [main, setMain] = useState('');
    const [wind, setWind] = useState('');
    const [clouds, setClouds] = useState('');
    const [pressure, setPressure] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=341eb2821f24c1d5880f160cb8ca206a&units=metric`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if(data.cod === 200) {
                        setCity(data.name);
                        setCountry(data.sys.country);
                        setIcon(data.weather[0].icon);
                        setDescription(data.weather[0].description);
                        setTemperature(data.main.temp);
                        setDegrees('°C');
                        setButton('°C / °F');
                        setMain(data.weather[0].main);
                        setWind(data.wind.speed);
                        setClouds(data.clouds.all);
                        setPressure(data.main.pressure);
                    }
                });
        });
    }, []);
    const toFarenheit = () => {
        let result = (temperature * 1.8) + 32;
        return result.toFixed(2);
    }
    const toCelsius = () => {
        let result = (temperature -32) * 0.5556;
        return result.toFixed(2);
    }
    const handleClick = () => {
        setButton('°F / °C');
        if(degrees === '°C') {
            let farenheit = toFarenheit();
            setTemperature(farenheit);
            setDegrees('°F');
        } else if(degrees === '°F') {
            let celsius = toCelsius();
            setTemperature(celsius);
            setDegrees('°C');
            setButton('°C / °F');
        }
    }
    const weather_main = { Thunderstorm: 'bg-danger', Drizzle: 'bg-info', Rain: 'bg-secondary', Snow: 'bg-warning', Atmosphere: 'bg-primary', Clear: 'bg-success', Clouds: 'bg-light' };
    let keys = Object.keys(weather_main);
    let found = keys.find(element => element === main);
    // let app = document.getElementById('App');
    // let bgColor = weather_main[found];
    // app.classList.add(bgColor);
    // setColor(bgColor);

    return(
        <>
            <CityCountry name={city} country={country} />
            <Icon icon_code={icon} description={description} temperature={temperature} degrees={degrees} onclick={handleClick} c_f={button} wind={wind} clouds={clouds} pressure={pressure}/>
        </>
    )
}

export default Request;