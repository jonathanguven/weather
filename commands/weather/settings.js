const location = require('./set-default-location');
const symbol = require('./set-default-symbol');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('settings')
        .setDescription('Provides information on current presets'),
    async execute(interaction) {
        const sign = symbol === 'F' ? 'Fahrenheit' : 'Celcius';
        return interaction.reply(`Default Location: ${location}\nDefault Symbol: ${sign}`);
    },
};