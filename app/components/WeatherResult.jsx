var React = require('react');
var WeatherResult = (props) => {
  var {temp, city} = props.weatherData;
  return(
    <p>It is {temp}&deg;C in {city}.</p>
  );
};

module.exports = WeatherResult;
