const { SlashCommandBuilder } = require('discord.js');
let symbol = 'F'; 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-default-symbol')
        .setDescription('Changes default symbol (F or C)')
        .addStringOption(option => option
            .setName('symbol')
            .setDescription('\'F\' for Fahrenheit, \'C\' for Celcius')
            .addChoices({ name: 'F', value: 'F'}, { name: 'C', value: 'C'})
            .setRequired(true)),
    getSymbol: async function getSymbol() { // helper function for weather.js command to retrieve sign of temp
        return symbol;
    },
    async execute(interaction) {
        symbol = interaction.options.getString('symbol') === 'F' ? 'F' : 'C'; // sets new symbol from user input
        let symbolVal = (symbol === 'F') ? 'Fahrenheit' : 'Celcius';
        return interaction.reply(`Default temperature scale set to ${symbolVal}`); 
    },
};