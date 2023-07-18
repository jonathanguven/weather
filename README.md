# Weather Bot

A Discord bot used to show real time weather updates of a specific location

Most of the setup was taken from the [discord.js](https://discordjs.guide/#before-you-begin) guide

## Environment Variables

To run this project, you will need to change the name of .evn.example to .env and add the following environment variables to your .env file

`BOT_TOKEN` - Token of the bot

`GUILD_ID` - Server ID that the bot is in (only used for deploying commands)

`CLIENT_ID` - Client ID of the bot (only used for deploying commands)

## Commands

Weather Bot has 8 commands that users can use. 4 of them are basic utility commands. The other 4 are weather commands.

### Weather Commands
`/weather [opt: Location] [opt: Degree Symbol]` - Fetches the weather from the last set default location


