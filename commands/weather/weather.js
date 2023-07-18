const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const weather = require('../../checkWeather');
const location = require('./set-default-location');
const symbol = require('./set-default-symbol');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Displays all current Weather data on a specific location')
        .addStringOption(option => option.setName('location').setDescription('The location to get the weather from'))
        .addStringOption(option => option.setName('degree').setDescription('The degree type (C or F)').addChoices({ name: 'F', value: 'F'}, { name: 'C', value: 'C'})),
    async execute(interaction) {
        // grabs the city from the user-inputted option
        let city = interaction.options.getString('location');
        if (!city) { // if no user input, get the last set default location
            city = await location.getLocation();
        }
        if (city === null) {
            return interaction.reply('Please provide a valid location, or set a new default location'); // default location has not yet been set
        }
        let degree = interaction.options.getString('degree') // grabs C or F from user input
        if (!degree) { degree = await symbol.getSymbol(); }
        try { // catch if city is not a real place and returns no data from api call
            // api call
            const data = await weather.checkWeather(city);

            let temp = data.current.temp_f;;
            let feel = data.current.feelslike_f;;
            if (degree === 'C') {
                temp = data.current.temp_c;
                feel = data.current.feelslike_c;
            }

            const condition = data.current.condition.text;
            const name = data.location.name;
            const icon = `https:${data.current.condition.icon}`;
            const windSpeed = data.current.wind_mph;
            const windDir = data.current.wind_dir;

            const weatherEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`Current weather of ${name}, ${data.location.region}`)
            .addFields( { name : 'Temperature', value: `${temp} \xB0${degree}`})
            .addFields( { name : 'Feels like', value: `${feel} \xB0${degree}`})
            .addFields( { name : 'Weather', value: `${condition}`})
            .addFields( { name : 'Wind Speed & Direction', value: `${windSpeed}, ${windDir}`})
            .setThumbnail(icon)            
            .setTimestamp()
            .setFooter({ text: 'Data pulled from weatherapi.com'});
            await interaction.reply({ embeds: [weatherEmbed] });
        } catch (error) {
            await interaction.reply(`An error occured while checking the weather of \'${city}.\'\nPlease use a valid location\n`);
            console.log(error);
        }
        
    } 
};