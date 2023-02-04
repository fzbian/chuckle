const logger = require('../logger');

module.exports = async (guild) => {
    logger.info(`Bot removed from ${guild.name} (${guild.id}).`)
};