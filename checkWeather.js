module.exports = {
    checkWeather: async function checkWeather(location) {
        try {
            const apiKey = process.env.API_KEY
            const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&ai=no&alerts=yes`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}