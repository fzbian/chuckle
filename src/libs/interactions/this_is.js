const { SlashCommandBuilder } = require("discord.js");
const { grasapiURL } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('this_is')
    .setDescription('Use the this is meme and give it the parameters.')
    .addStringOption(text => text
      .setName('url')
      .setDescription('Specify the url image that your image will carry.')
      .setRequired(true)),
  async execute(interaction) {
    const url = interaction.options.get('url').value;
    const pattern = /(https?:\/\/[^\s]+)/g;

    if (!pattern.test(url)) {
      return interaction.reply("The URL seems to be invalid, remember that it must be a link `(https://domain.com/image.jpg/png)`");
    }

    urlTo = url.replace(/ /g, "%20");
    await interaction.reply(`${grasapiURL}this_is/?url=${urlTo}`)
  }
}