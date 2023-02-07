const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { GrasapiURL, MainColor, FooterMeme } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('jason_momoa_henry_cavil')
  .setDescription('Use the jason momoa henry cavil meme and give it the parameters.')
  .addStringOption(text => text
    .setName('text1')
    .setDescription('Specify the parameters that your image will carry.')
    .setRequired(true))
  .addStringOption(text => text
    .setName('text2')
    .setDescription('Specify the parameters that your image will carry in the second section.')
    .setRequired(true)),
  async execute(interaction) {
    const Text1 = interaction.options.get('text1').value;
    const Text2 = interaction.options.get('text2').value;
    TextWithoutSpaces1 = Text1.replace(/ /g, "%20");
    TextWithoutSpaces2 = Text2.replace(/ /g, "%20");

    const meme = new EmbedBuilder()
    meme.setColor(MainColor)
    meme.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    meme.setImage(`${GrasapiURL}jason_momoa_henry_cavil/?text1=${TextWithoutSpaces1}&text2=${TextWithoutSpaces2}`)
    meme.setTimestamp()
    meme.setFooter({ text: FooterMeme, iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [meme]})
  }
}