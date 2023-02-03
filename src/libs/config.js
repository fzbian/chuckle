const dotenv = require('dotenv');

dotenv.config({ path: `.env`});

module.exports = {
  discordToken: process.env.DISCORD_TOKEN,
  discordClientId: process.env.CLIENT_ID,
  shouldCreateCommands: process.env.SHOULD_CREATE_COMMANDS === 'true',
  grasapiURL: process.env.GRASAPI_URL,
  MainColor: process.env.MAIN_COLOR
};
