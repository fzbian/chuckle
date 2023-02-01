const { SlashCommandBuilder } = require("discord.js");
const { grasapiURL } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('drake')
    .setDescription('Use the drake meme and give it the parameters.')
    .addStringOption(text => text
      .setName('text1')
      .setDescription('Specify the parameters that your image will carry.')
      .setRequired(true))
    .addStringOption(text => text
        .setName('text2')
        .setDescription('Specify the parameters that your image will carry in the second section.')
        .setRequired(true)),
  async execute(interaction) {
    const text1 = interaction.options.get('text1').value;
    const text2 = interaction.options.get('text2').value;
    texto1 = text1.replace(/ /g, "%20");
    texto2 = text2.replace(/ /g, "%20");
    await interaction.reply(`${grasapiURL}drake/?text1=${texto1}&text2=${texto2}`)
  }
}