const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { GrasapiURL, MainColor } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('this_is')
  .setDescription('Use the this is meme and give it the parameters.')
  .addStringOption(text => text
    .setName('url')
    .setDescription('Specify the url image that your image will carry.')
    .setRequired(true)),
  async execute(interaction) {
    const PatternURL = /(https?:\/\/[^\s]+)/g;

    const Url = interaction.options.get('url').value;

    if (!PatternURL.test(Url)) {
      return interaction.reply("The URL seems to be invalid, remember that it must be a link `(https://domain.com/image.jpg/png)`");
    }

    const meme = new EmbedBuilder()
    meme.setColor(MainColor)
    meme.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    meme.setImage(`${GrasapiURL}this_is/?url=${Url}`)
    meme.setTimestamp()
    meme.setFooter({ text: "This Is Meme", iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [meme]})
  }
}