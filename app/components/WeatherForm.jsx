var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    var city = this.refs.city.value;

    if(city.length > 0) {
      this.refs.city.value = '';
      this.props.onSearch(city);
    }
  },

  render: function(){

    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Enter City name" ref="city"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
