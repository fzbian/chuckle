const dotenv = require('dotenv');

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env`});


module.exports = {
  discordToken: process.env.DISCORD_TOKEN,
  discordClientId: process.env.CLIENT_ID,
  openAIKey: process.env.OPEANAI_KEY,
  shouldCreateCommands: process.env.SHOULD_CREATE_COMMANDS === 'true',
  grasapiURL: process.env.GRASAPI_URL
};
