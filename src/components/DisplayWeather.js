import React from 'react';

function DisplayWeather(props){
   
    const {temperature,minTemperature,maxTemperature,description,wind_speed,pressure,humidity,}=props.weatherData;

    return(
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature}<sup>o</sup>C </h1>
                    <h1>{description}</h1>
                    <h4>{props.change}</h4>
                </div>
            </div>
            
            <div className="row">
                
                <div className="col-md-3 weather-info">
                    <p><b>Min</b></p>
                    <h2>{minTemperature}<sup>o</sup>C </h2>
                    <p><b>Max</b></p>
                    <h2>{maxTemperature}<sup>o</sup>C </h2>
                </div>
                <div className="col-md-3 weather-info">
                    <p><b>wind speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>
                <div className="col-md-3 weather-info">
                    <p><b>Pressure</b>(milibar)</p>
                    <h2>{pressure}</h2>
                </div>
                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>
            </div>
        </div>
    );
}

export default DisplayWeather;