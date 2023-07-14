
module.exports = {
    checkWeather: async function checkWeather(query) {
        const apiKey = process.env.API_KEY
        const url = `http://api.weatherapi.com/v1?key=${apiKey}?q=${query}`
        const options = { 
            method: 'GET' 
        }

        const response = await fetch(url, options);
        const data = await response.json();
    }
}