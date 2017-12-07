var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var WeatherApi = require('WeatherApi');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(city) {
    this.setState({isLoading: true});
    WeatherApi.getTemp(city).then(temp => {
      this.setState({
        city,
        temp,
        isLoading: false
      });
    }, err => {
      this.setState({isLoading: false});
      alert(err);
    });
    // this.setState({
    //   city,
    //   temp: 23
    // });
  },

  render: function(){
    var {temp, city, isLoading} = this.state;
    function renderMessage () {

      if(isLoading) {
        return (
          <h3>fetching weather...</h3>
        );
      } else if (temp && city) {
        return (
          <WeatherResult weatherData={{temp,city}}/>
        );
      }
    }

    return(
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
