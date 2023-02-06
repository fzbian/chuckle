const dotenv = require('dotenv');

dotenv.config({ path: `.env`});

var DiscordInviteLink = `https://discord.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=bot&permissions=274877959168`;

module.exports = {
  DiscordToken: process.env.DISCORD_TOKEN,
  DiscordClientId: process.env.CLIENT_ID,
  BotName: process.env.BOT_NAME,
  ShouldCreateCommands: process.env.SHOULD_CREATE_COMMANDS === 'true',
  GrasapiURL: process.env.GRASAPI_URL,
  MainColor: process.env.MAIN_COLOR,
  LoggerChannel: process.env.LOGGER_CHANNEL_ID,
  GreenColor: process.env.GREEN_COLOR,
  RedColor: process.env.RED_COLOR,
  MovementChannel: process.env.MOVEMENT_CHANNEL,
  InteractionChannel: process.env.INTERACTION_CHANNEL,
  DeveloperID: process.env.DEVELOPER,
  DiscordInviteLink: DiscordInviteLink
};