const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Provides information about the server.'),
    async execute(interaction) {
        return interaction.reply(`
            Weather Bot is a versatile Discord bot providing up-to-date weather reports for any location up to a week in advance. It offers accurate data on temperature, humidity, wind speed, and precipitation. Moreover, it suggests personalized activities based on the weather, ensuring users can make the most of their days. Whether it's outdoor adventures, indoor hobbies, or seasonal delights, Weather Bot's recommendations cater to every forecast. Users can customize notifications and receive daily weather updates at their preferred time. With Weather Bot, your Discord server members can stay informed, plan ahead, and enjoy their activities in sync with the weather.
        `);
    },
};