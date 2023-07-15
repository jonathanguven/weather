const { defaultLocation, defaultSign } = require('../../settings.json');
const { SlashCommandBuilder } = require('discord.js');
let location = null; // default location is null until user runs this command

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-default-location')
        .setDescription('Changes default location')
        .addStringOption(option => option
            .setName('new-location')
            .setDescription('The location to get the weather from')
            .setRequired(true)),
    getLocation: async function getLocation() { // helper function for weather.js command to retrieve default location
        return location;
    },
    async execute(interaction) {
        location = interaction.options.getString('new-location'); // sets new default location from user input
        return interaction.reply(`Default location set to ${location}`); 
    },
};