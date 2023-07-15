
module.exports = {
    checkWeather: async function checkWeather(query) {
        const apiKey = process.env.API_KEY
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=1&ai=no&alerts=yes`
        const options = { 
            method: 'GET' 
        }

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}