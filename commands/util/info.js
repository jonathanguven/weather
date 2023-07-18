const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Provides information about the server.'),
    async execute(interaction) {
        return interaction.reply("Weather Bot is a versatile Discord bot providing up-to-date weather reports for any location. It offers accurate data on temperature, humidity, wind speed, and precipitation.");
    },
};