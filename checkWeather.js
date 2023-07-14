
module.exports = {
    checkWeather: async function checkWeather(query) {
        const apiKey = process.env.API_KEY
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes}`
        const options = { 
            method: 'GET' 
        }

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}