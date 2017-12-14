var React = require('react');
var WeatherResult = (props) => {
  var {temp, city} = props.weatherData;
  return(
    <h3 className="text-center">It is {temp}&deg;C in {city}.</h3>
  );
};

module.exports = WeatherResult;
