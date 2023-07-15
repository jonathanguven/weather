const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const weather = require('../../checkWeather');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Displays all current Weather data on a specific location')
        .addStringOption(option => option.setName('location').setDescription('The location to get the weather from'))
        .addStringOption(option => option.setName('degree').setDescription('The degree type (C or F)').addChoices({ name: 'F', value: 'F'}, { name: 'C', value: 'C'})),
    async execute(interaction) {


        const data = await weather.checkWeather('San Jose');
        const temp = data.current.temp_f;
        const condition = data.current.condition.text;
        const name = data.location.name;
        const feel = data.current.feelslike_f;
        const icon = `https:${data.current.condition.icon}`;
        const windSpeed = data.current.wind_mph;
        const windDir = data.current.wind_dir;
        



        const weatherEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Current weather of ${name}, ${data.location.region}`)
        .addFields( { name : 'Temperature', value: `${temp}`})
        .addFields( { name : 'Feels like', value: `${feel}`})
        .addFields( { name : 'Weather', value: `${condition}`})
        .addFields( { name : 'Wind Speed & Direction', value: `${windSpeed}, ${windDir}`})
        .setThumbnail(icon)
        .setTimestamp()
        .setFooter({ text: 'Data pulled from weatherapi.com'});
        await interaction.reply({ embeds: [weatherEmbed] });
    }
};
