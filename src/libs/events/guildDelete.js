const { EmbedBuilder } = require("discord.js");
const { MovementChannel, RedColor } = require('../config');

module.exports = async (guild) => {
    const channel = guild.client.channels.cache.get(MovementChannel);

    const logger = new EmbedBuilder()
    logger.setColor(RedColor)
    logger.setTitle("Bot removed")
    logger.addFields(
		{ name: 'Name', value: `${guild.name}`, inline: true },
        { name: 'ID', value: `${guild.id}`, inline: true  },
        { name: 'Members', value: `${guild.memberCount}`, inline: true  },
        { name: 'Owner ID', value: `${guild.ownerId}`, inline: true  },
	)
    logger.setThumbnail(guild.iconURL())
    logger.setFooter({ text: "Logger", iconURL: guild.iconURL() })
    channel.send({embeds: [logger]})
};