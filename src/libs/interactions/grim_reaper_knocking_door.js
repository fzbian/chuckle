const { SlashCommandBuilder } = require("discord.js");
const { grasapiURL } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('grim_reaper_knocking_door')
    .setDescription('Use the grim reaper knocking door meme and give it the parameters.')
    .addStringOption(text => text
      .setName('url1')
      .setDescription('Specify the URL of the image that will go in the first section.')
      .setRequired(true))
    .addStringOption(text => text
      .setName('url2')
      .setDescription('Specify the URL of the image that will go in the second section.')
      .setRequired(true))
    .addStringOption(text => text
      .setName('url3')
      .setDescription('Specify the URL of the image that will go in the third section.')
      .setRequired(true))
    .addStringOption(text => text
      .setName('url4')
      .setDescription('Specify the URL of the image that will go in the fourth section.')
      .setRequired(true)),
  async execute(interaction) {
    const pattern = /(https?:\/\/[^\s]+)/g;
    const url1 = interaction.options.get('url1').value;
    const url2 = interaction.options.get('url2').value;
    const url3 = interaction.options.get('url3').value;
    const url4 = interaction.options.get('url4').value;
    if (!pattern.test(url1) && !pattern.test(url2) && !pattern.test(url3) && !pattern.test(url4)) {
      return interaction.reply("The URL seems to be invalid, remember that it must be a link `(https://domain.com/image.jpg/png)`");
    }
    url1To = url1.replace(/ /g, "%20");
    url2To = url2.replace(/ /g, "%20");
    url3To = url3.replace(/ /g, "%20");
    url4To = url4.replace(/ /g, "%20");
    await interaction.reply(`${grasapiURL}grim_reaper_knocking_door/?url1=${url1To}&url2=${url2To}&url3=${url3To}&url4=${url4To}`)
  }
}