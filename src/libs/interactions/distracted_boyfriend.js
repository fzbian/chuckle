const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { GrasapiURL, MainColor } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('distracted_boyfriend')
  .setDescription('Use the distracted boyfriend meme and give it the parameters.')
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
      .setDescription('Specify the parameters that your image will carry in the three section.')
      .setRequired(true)),
  async execute(interaction) {
    const Text1 = interaction.options.get('text1').value;
    const Text2 = interaction.options.get('text2').value;
    const Text3 = interaction.options.get('text3').value;
    TextWithoutSpaces1 = Text1.replace(/ /g, "%20");
    TextWithoutSpaces2 = Text2.replace(/ /g, "%20");
    TextWithoutSpaces3 = Text3.replace(/ /g, "%20");

    const meme = new EmbedBuilder()
    meme.setColor(MainColor)
    meme.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    meme.setImage(`${GrasapiURL}distracted_boyfriend/?text1=${TextWithoutSpaces1}&text2=${TextWithoutSpaces2}&text3=${TextWithoutSpaces3}`)
    meme.setTimestamp()
    meme.setFooter({ text: "Distracted Boyfriend Meme", iconURL: interaction.guild.iconURL() })

    await interaction.reply({embeds: [meme]})
  }
}