var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var WeatherApi = require('WeatherApi');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(city) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    WeatherApi.getTemp(city).then(temp => {
      this.setState({
        city,
        temp,
        isLoading: false
      });
    }, err => {
      this.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
    // this.setState({
    //   city,
    //   temp: 23
    // });
  },

  render: function(){
    var {temp, city, isLoading, errorMessage} = this.state;
    function renderMessage () {

      if(isLoading) {
        return (
          <h3 className="text-center">fetching weather...</h3>
        );
      } else if (temp && city) {
        return (
          <WeatherResult weatherData={{temp,city}}/>
        );
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
