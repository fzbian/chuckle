const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { grasapiURL, MainColor } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('left_right')
  .setDescription('Use the left right meme and give it the parameters.')
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
    meme.setImage(`${grasapiURL}left_right/?text1=${TextWithoutSpaces1}&text2=${TextWithoutSpaces2}`)
    meme.setTimestamp()
    meme.setFooter({ text: "Left Right Cavil Meme", iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [meme]})
  }
}