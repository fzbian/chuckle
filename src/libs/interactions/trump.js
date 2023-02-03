const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { grasapiURL, MainColor } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trump')
    .setDescription('Use the trump meme and give it the parameters.')
    .addStringOption(text => text
      .setName('text')
      .setDescription('Specify the parameters that your image will carry.')
      .setRequired(true)),
  async execute(interaction) {
    const Text = interaction.options.get('text').value;
    TextWithoutSpaces = Text.replace(/ /g, "%20");

    const meme = new EmbedBuilder()
    meme.setColor(MainColor)
    meme.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    meme.setImage(`${grasapiURL}trump/?text=${TextWithoutSpaces}`)
    meme.setTimestamp()
    meme.setFooter({ text: "Trump Meme", iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [meme]})
  }
}