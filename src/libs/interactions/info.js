const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { MainColor, DiscordInviteLink, BotName, DeveloperID } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Displays bot information.'),
  async execute(interaction) {
    if (interaction.user.id == DeveloperID) {
      
      interaction.client.guilds.cache.size
      await interaction.reply(`Servers: ${interaction.client.guilds.cache.size}`)
    } else {
      const Buttons = new ActionRowBuilder()
      Buttons.addComponents(
        new ButtonBuilder()
          .setLabel('Invite me!')
          .setURL(DiscordInviteLink)
          .setStyle(ButtonStyle.Link),
      );

      const info = new EmbedBuilder()
      info.setTitle(`${BotName} | A meme factory`)
      info.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
      info.setColor(MainColor)
      info.addFields(
        { name: 'Server', value: 'Oxta.Cloud', inline: true },
        { name: 'Library', value: 'Discord.js', inline: true },
        { name: 'Developer', value: 'fzbian#9210', inline: true },
      )
      info.setTimestamp()
      info.setFooter({ text: "Bot info", iconURL: interaction.guild.iconURL() })
      await interaction.reply({ embeds: [info], components: [Buttons] })
    }
  }
}


