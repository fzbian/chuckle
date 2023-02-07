const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { MainColor, DiscordInviteLink, BotName, DeveloperID } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('memes')
    .setDescription('Displays memes available.'),
  async execute(interaction) {
    const Buttons = new ActionRowBuilder()
    Buttons.addComponents(
      new ButtonBuilder()
        .setLabel('Invite me!')
        .setURL(DiscordInviteLink)
        .setStyle(ButtonStyle.Link),
    );

    const Info = new EmbedBuilder();
    Info.setAuthor({
      name: `Information and commands available | ${BotName}`,
    });
    Info.addFields(
      {
        name: "Memes available",
        value: "`change_my_mind`, `disappointed_black_guy`,  `distracted_boyfriend`, `drake` , `expanding_brain`, `jason_momoa_henry_cavil`, `left_right`, `running_away_balloon`, `spiderman`, `this_is`,  `three_headed_dragon`, `undertaker`, `grim_reaper_knocking_door`, `zoolander`.",
      },
      {
        name: "Useful commands",
        value: "`help`, `info`, `memes`, `suggest`",
      },
      {
        name: "Bot information",
        value: "**- Server**: Oxta.Cloud\n**- Library**: discord.js\n**- Developer**: fzbian#9210 (github.com/fzbian)",
      },
    );
    Info.setColor(MainColor);
    Info.setFooter({
      text: `${BotName}`,
    });
    Info.setTimestamp();

    const DevInfo = new EmbedBuilder();
    DevInfo.setAuthor({
      name: `Information and commands available | ${BotName}`,
    });
    DevInfo.addFields(
      {
        name: "Memes available",
        value: "`change_my_mind`, `disappointed_black_guy`,  `distracted_boyfriend`, `drake` , `expanding_brain`, `jason_momoa_henry_cavil`, `left_right`, `running_away_balloon`, `spiderman`, `this_is`,  `three_headed_dragon`, `undertaker`, `grim_reaper_knocking_door`, `zoolander`.",
      },
      {
        name: "Useful commands",
        value: "`help`, `info`, `memes`, `suggest`",
      },
      {
        name: "Bot information",
        value: "**- Server**: Oxta.Cloud\n**- Library**: discord.js\n**- Developer**: fzbian#9210 (github.com/fzbian)",
      },
      {
        name: "Developer bot information",
        value: `**- Servers**: ${interaction.client.guilds.cache.size}`,
      },
    );
    DevInfo.setColor(MainColor);
    DevInfo.setFooter({
      text: `${BotName}`,
    });
    DevInfo.setTimestamp();

    if (interaction.user.id == DeveloperID) {
      await interaction.reply({ embeds: [DevInfo], components: [Buttons] })
    } else {
      await interaction.reply({ embeds: [Info], components: [Buttons] })
    }
  }
}