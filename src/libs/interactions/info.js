const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { MainColor, DiscordInviteLink, BotName } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('info')
  .setDescription('Displays bot information.'),
  async execute(interaction) {
    const Buttons = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Invite me!')
          .setURL(DiscordInviteLink)
					.setStyle(ButtonStyle.Link),
			);


    const info = new EmbedBuilder()
    info.setTitle(`${BotName} | A meme factory`)
    info.setColor(MainColor)
    info.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    info.setTimestamp()
    .addFields(
      { name: 'Server', value: 'Oxta.Cloud', inline: true },
      { name: 'Library', value: 'Discord.js', inline: true },
      { name: 'Developer', value: 'fzbian#9210', inline: true },
    )
    info.setFooter({ text: "Bot info", iconURL: interaction.guild.iconURL() })
    await interaction.reply({embeds: [info], components: [Buttons]})
  }
}