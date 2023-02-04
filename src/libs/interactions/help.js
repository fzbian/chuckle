const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { MainColor, DiscordInviteLink, BotName } = require('../config');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('help')
  .setDescription('Displays bot commands.'),
  async execute(interaction) {

    const info = new EmbedBuilder()
    info.setTitle(`${BotName} | Available commands`)
    info.setColor(MainColor)
    info.setAuthor({ name: `Requested by ${interaction.user.username}`, iconURL: interaction.user.avatarURL() })
    info.setTimestamp()
    .addFields(
      { name: 'change_my_mind', value: '`text`' },
      { name: 'disappointed_black_guy', value: '`text1`, `text2`' },
      { name: 'distracted_boyfriend', value: '`text1`, `text2`, `text3`' },
      { name: 'drake', value: '`text1`, `text2`' },
      { name: 'expanding_brain', value: '`text1`, `text2`, `text3`, `text4`' },
      { name: 'jason_momoa_henry_cavil', value: '`text1`, `text2`' },
      { name: 'left_right', value: '`text1`, `text2`' },
      { name: 'spiderman', value: '`text1`, `text2`' },
      { name: 'running_away_balloon', value:'`text1`, `text2`, `text3`' },
      { name: 'three_headed_dragon', value: '`text1`, `text2`, `text3`' },
      { name: 'this_is', value: '`url`' },
      { name: 'spiderman', value: '`text1`, `text2`' },
      { name: 'grim_reaper_knocking_door', value: '`url1`, `url2`, `url3`, `url4`' },

    )
    info.setFooter({ text: "Bot commands", iconURL: interaction.guild.iconURL() })
  
    await interaction.reply({embeds: [info]})
  }
}