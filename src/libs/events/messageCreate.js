const { EmbedBuilder } = require("discord.js");
const { LoggerChannel, MainColor } = require('../config');

module.exports = (e) => {
    if (e.interaction && e.interaction.user) {
        const channel = e.client.channels.cache.get(LoggerChannel);

        const logger = new EmbedBuilder()
        logger.setColor(MainColor)
        logger.setAuthor({
            name: `${e.interaction.user.username}#${e.interaction.user.discriminator}`,
            iconURL: e.interaction.user.avatarURL()
        })
        logger.addFields(
            { name: 'Command', value: e.interaction.commandName, inline: true },
            { name: 'Guild ID', value: e.guildId, inline: true },
        )
        logger.setFooter({ text: "Logger" })
        channel.send({ embeds: [logger] })
    }
};