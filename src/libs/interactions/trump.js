const { SlashCommandBuilder } = require("discord.js");
const { grasapiURL } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trump')
    .setDescription('Use the trump meme and give it the parameters.')
    .addStringOption(text => text
      .setName('text')
      .setDescription('Specify the parameters that your image will carry.')
      .setRequired(true)),
  async execute(interaction) {
    const text = interaction.options.get('text').value;
    texto = text.replace(/ /g, "%20");
    await interaction.reply(`${grasapiURL}trump/?text=${texto}`)
  }
}