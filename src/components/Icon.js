import React from 'react';

const Icon = (props) => {
    return(
        <>
            <div className="row mb-3">
                <div className="col-4">
                    <img src={`http://openweathermap.org/img/wn/${props.icon_code}@2x.png`} alt="weather icon"/>
                </div>
                <div className="col-8 text-justify">
                    <p>'{props.description}'</p>
                    <p><b>Temperature:</b> {props.temperature} {props.degrees}</p>
                    <p><b>Wind Speed:</b> {props.wind} m/s</p>
                    <p><b>Clouds:</b> {props.clouds} %</p>
                    <p><b>Pressure:</b> {props.pressure} hPa</p>
                </div>
            </div>
            <button className="btn btn-primary mb-2" onClick={props.onclick}>{props.c_f}</button>
        </>
    );
}

export default Icon;