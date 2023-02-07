const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { GrasapiURL, MainColor, FooterMeme } = require('../config');

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
    const PatternURL = /(https?:\/\/[^\s]+)/g;

    const Url1 = interaction.options.get('url1').value;
    const Url2 = interaction.options.get('url2').value;
    const Url3 = interaction.options.get('url3').value;
    const Url4 = interaction.options.get('url4').value;

    if (!PatternURL.test(Url1) && !PatternURL.test(Url2) && !PatternURL.test(Url3) && !PatternURL.test(Url4)) {
      return interaction.reply("The URL seems to be invalid, remember that it must be a link `(https://domain.com/image.jpg/png)`");
    }

    const meme = new EmbedBuilder()
    meme.setColor(MainColor)
    meme.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    meme.setImage(`${GrasapiURL}grim_reaper_knocking_door/?url1=${Url1}&url2=${Url2}&url3=${Url3}&url4=${Url4}`)
    meme.setTimestamp()
    meme.setFooter({ text: FooterMeme, iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [meme]})
  }
}