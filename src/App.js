import React from 'react';

import '/Users/camilapv/Desktop/ACADEMLO/REACT/seconddue/weather/node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/overwrite.css';

import WeatherBox from './components/weather-box.js';

function App() {
  return (
    <div className="App" id="App">
      <WeatherBox />
    </div>
  );
}

export default App;
