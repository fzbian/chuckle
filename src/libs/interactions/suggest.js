const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { MainColor } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('Suggest a meme for the bot!')
    .addStringOption(text => text
      .setName('url')
      .setDescription('Image URL')
      .setRequired(true)),
  async execute(interaction) {
    const PatternURL = /(https?:\/\/[^\s]+)/g;
    const Url = interaction.options.get('url').value;

    if (!PatternURL.test(Url)) {
      return interaction.reply("The URL seems to be invalid, remember that it must be a link `(https://domain.com/image.jpg/png)`");
    }

    const meme = new EmbedBuilder()
    meme.setColor(MainColor)
    meme.setDescription("Your meme has been sent to the developers.")
    meme.setImage(Url)
    meme.setTimestamp()
    meme.setFooter({ text: "Suggest Meme", iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [meme], ephemeral: true})
  }
}