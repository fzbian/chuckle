const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { MainColor, SuggestChannel } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('Suggest a meme for the bot!')
    .addStringOption(text => text
      .setName('url')
      .setDescription('Image URL')
      .setRequired(true)),
  execute(interaction) {
    const channel = interaction.guild.client.channels.cache.get(SuggestChannel);
    const PatternURL = /(https?:\/\/[^\s]+)/g;
    const Url = interaction.options.get('url').value;

    if (!PatternURL.test(Url)) {
      return interaction.reply("The URL seems to be invalid, remember that it must be a link `(https://domain.com/image.jpg/png)`");
    }

    const suggest = new EmbedBuilder()
    suggest.setColor(MainColor)
    suggest.setDescription("Your meme has been sent to the developers.")
    suggest.setImage(Url)
    suggest.setTimestamp()
    suggest.setFooter({ text: "Suggest Meme", iconURL: interaction.guild.iconURL() })

    const suggestMsg = new EmbedBuilder()
    suggestMsg.setColor(MainColor)
    suggestMsg.setDescription(`${interaction.user.username}#${interaction.user.discriminator} suggested a meme.`)
    suggestMsg.setImage(Url)
    suggestMsg.setTimestamp()
    suggestMsg.setFooter({ text: "Suggest", iconURL: interaction.guild.iconURL() })
  
    interaction.reply({embeds: [suggest], ephemeral: true})
    channel.send({embeds: [suggestMsg]})
  }
}