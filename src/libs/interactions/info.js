const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { MainColor, DiscordInviteLink, BotName, DeveloperID } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Displays bot information.'),
  async execute(interaction) {
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

    const DevInfo = new EmbedBuilder()
    DevInfo.setTitle(`${BotName} | A meme factory`)
    DevInfo.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    DevInfo.setColor(MainColor)
    DevInfo.addFields(
      { name: 'Server', value: 'Oxta.Cloud', inline: true },
      { name: 'Library', value: 'Discord.js', inline: true },
      { name: 'Developer', value: 'fzbian#9210', inline: true },
      { name: '\u200B', value: '**Developer Info**\u200B' },
      { name: 'Servers', value: `${interaction.client.guilds.cache.size}`, inline: true },
    )
    info.setTimestamp()
    info.setFooter({ text: "Bot info", iconURL: interaction.guild.iconURL() })

    if (interaction.user.id == DeveloperID) {
      await interaction.reply({ embeds: [DevInfo] })
    } else {
      await interaction.reply({ embeds: [info], components: [Buttons] })
    }
  }
}


