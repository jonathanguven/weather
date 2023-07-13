const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Displays all current Weather data on a specific location')
        .addStringOption(option => option.setName('location').setDescription('The location to get the weather from'))
        .addStringOption(option => option.setName('degree').setDescription('The degree type (C or F)').addChoices({ name: 'F', value: 'F'}, { name: 'C', value: 'C'})),
    async execute(interaction) {
        const temp = 'test';
        const type = 'test';
        const name = 'test';
        const feel = 'test';
        const icon = 'test';
        const wind = 'test';
        const day = 'test';
        const alert = 'test';

        const weatherEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Current weather of ${name}`)
        .addFields( { name : 'Temperature', value: `${temp}`})
        .addFields( { name : 'Feels like', value: `${feel}`})
        .addFields( { name : 'Weather', value: `${type}`})
        .addFields( { name : 'Current Alerts', value: `${alert}`})
        .addFields( { name : 'Week Day', value: `${day}`})
        .addFields( { name : 'Wind Speed & Direction', value: `${wind}`})
        // .setThumbnail(icon)
        .setTimestamp()
        .setFooter({ text: 'Thank you for using weather bot'});
        await interaction.reply({ embeds: [weatherEmbed] });
    }
};
