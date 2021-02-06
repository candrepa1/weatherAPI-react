import React from 'react';

import Request from './Request.js';

const WeatherBox = () => {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="bg-secondary text-light p-4 rounded text-center">
                        <h2 className="mb-4 weather">Weather App</h2>
                        <Request/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherBox;