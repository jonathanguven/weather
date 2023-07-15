const { defaultLocation, defaultSign } = require('../../settings.json');
const { SlashCommandBuilder } = require('discord.js');
let location = null;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-default-location')
        .setDescription('Changes default location')
        .addStringOption(option => option
            .setName('new-location')
            .setDescription('The location to get the weather from')
            .setRequired(true)),
    getLocation: async function getLocation() {
        return location;
    },
    async execute(interaction) {
        location = interaction.options.getString('new-location');
        console.log(location);
        console.log(this.location);
        return interaction.reply(`Default location set to ${location}`);
    },
};