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
`/weather [opt:location] [opt:degree-symbol]` - Fetches the weather from the location specified, with the degreev(C or F) specified. Without location argument, command fetches weather from last default location set. Without degree symbol argument, uses last setdefault symbol.

`/set-default-location [req: new-location]` - Sets the default location of the bot to the user-inputted location. Users must set default location before using `/weather` without a location argument.

`/set-default-symbol [Choices: C or F]` - Sets the default temperature signal to the choice that the user inputted, F for Fahrenheit and C for Celcius. By default, the symbol is 'F'.

`/settings` - Displays default settings set by the user

### Utility Commands
`/info` - Displays information regarding Weather Bot

`/ping` - Displays latency of bot

`/server` - Displays basic information about the server

`/user` - Displays basic information about the user

