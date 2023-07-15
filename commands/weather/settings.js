const { defaultLocation, defaultSign } = require('../../settings.json');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('settings')
        .setDescription('Provides information on current presets'),
    async execute(interaction) {
        const symbol = defaultSign === 'F' ? 'Fahrenheit' : 'Celcius';
        return interaction.reply(`Default Location: ${defaultLocation}\nDefault Symbol: ${symbol}`);
    },
};