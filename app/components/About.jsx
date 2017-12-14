var React = require('react');
var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this app to practice building react application</p>
      <p>Here are some some tools I have used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> This was JS framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> Weather API used to fetch weather data.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
