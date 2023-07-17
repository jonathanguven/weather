const { SlashCommandBuilder } = require('discord.js');
let symbol = 'F'; // default location is null until user runs this command

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-default-symbol')
        .setDescription('Changes default symbol (F or C)')
        .addStringOption(option => option
            .setName('symbol')
            .setDescription('\'F\' for Fahrenheit, \'C\' for Celcius')
            .setRequired(true)),
    getSymbol: async function getSymbol() { // helper function for weather.js command to retrieve default location
        return symbol;
    },
    async execute(interaction) {
        symbol = interaction.options.getString('symbol') === 'F' ? 'F' : 'C'; // sets new default location from user input
        let symbolVal = (symbol === 'F') ? 'Fahrenheit' : 'Celcius';
        return interaction.reply(`Default temperature scale set to ${symbolVal}`); 
    },
};