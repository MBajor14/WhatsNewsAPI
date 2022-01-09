const 
    API_KEY = process.env.WEATHER_API_KEY,
    BASE_URL = 'http://api.openweathermap.org/data/2.5',
    superagent = require('superagent');

module.exports = class WeatherApiKit {
    static get(url) {
        return superagent.get(url);
    }

    static getCurrentWeather(city) {
        return this.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
    }

    static getDailyForecast(city, days) {
        return this.get(`${BASE_URL}/forecast/daily?q=${city}&cnt=${days}&appid=${API_KEY}`);
    }
}