const location = require('./set-default-location');
const symbol = require('./set-default-symbol');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('settings')
        .setDescription('Provides information on current presets'),
    async execute(interaction) {
        let symbolVal = (await symbol.getSymbol() === 'F') ? 'Fahrenheit' : 'Celcius';
        const loc = await location.getLocation();
        let city = loc === null ? 'No default location set' : loc;
        return interaction.reply(`Default Location: ${city}\nDefault Symbol: ${symbolVal}`);
    },
};