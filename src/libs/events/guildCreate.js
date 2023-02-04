const logger = require('../logger');

module.exports = async (guild) => {
    logger.info(`Bot added to ${guild.name} (${guild.id}), with ${guild.memberCount} members`)
};