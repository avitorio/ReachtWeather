var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f10b7961c09098b4eaa03868c46baa23';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl)
            .then(function(response) {
                if(response.data.cod && response.data.message) {
                    throw new Error('Unable to fetch weather');
                } else {
                    return response.data.main.temp;
                }
            }).catch(function(error) {
                throw new Error('Unable to fetch weather');
            });
	}
}