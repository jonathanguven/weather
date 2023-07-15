const defaultLocation = require('./settings.json');
module.exports = {
    checkWeather: async function checkWeather(location) {
        const apiKey = process.env.API_KEY
        let loc = defaultLocation;
        if (location !== null) {
            loc = location;
        }
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&ai=no&alerts=yes`
        const options = { 
            method: 'GET' 
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}