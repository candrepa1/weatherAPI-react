import React from 'react';

const CityCountry = (props) => {
    return(
        <>
            <h5 className="text-success mb-3">{props.name}, {props.country}</h5>
        </>
    );
}

export default CityCountry;