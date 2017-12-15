var axios = require('axios');

const WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=13660e7a50dd0d4bbef6492060a12d97&units=metric';

module.exports = {
  getTemp: function(location) {
    var requestUrl = `${WEATHER_MAP_URL}&q=${encodeURI(location)}`;

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {``
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
};
