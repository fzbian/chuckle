const { SlashCommandBuilder } = require("discord.js");
const { grasapiURL } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('expanding_brain')
    .setDescription('Use the expanding brain meme and give it the parameters.')
    .addStringOption(text => text
      .setName('text1')
      .setDescription('Specify the parameters that your image will carry.')
      .setRequired(true))
    .addStringOption(text => text
      .setName('text2')
      .setDescription('Specify the parameters that your image will carry in the second section.')
      .setRequired(true))
    .addStringOption(text => text
      .setName('text3')
      .setDescription('Specify the parameters that your image will carry in the third section.')
      .setRequired(true))
    .addStringOption(text => text
      .setName('text4')
      .setDescription('Specify the parameters that your image will carry in the fourth section.')
      .setRequired(true)),
  async execute(interaction) {
    const text1 = interaction.options.get('text1').value;
    const text2 = interaction.options.get('text2').value;
    const text3 = interaction.options.get('text3').value;
    const text4 = interaction.options.get('text4').value;
    texto1 = text1.replace(/ /g, "%20");
    texto2 = text2.replace(/ /g, "%20");
    texto3 = text3.replace(/ /g, "%20");
    texto4 = text4.replace(/ /g, "%20");
    await interaction.reply(`${grasapiURL}expanding_brain/?text1=${texto1}&text2=${texto2}&text3=${texto3}&text4=${texto4}`)
  }
}