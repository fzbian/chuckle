const { Client, GatewayIntentBits, Collection } = require('discord.js');
const logger = require('./libs/logger')
const { DiscordToken } = require('./libs/config');
const {
    ready,
    interactionCreate,
    messageCreate,
    guildCreate,
    guildDelete
} = require('./libs/events');

const initializeInteractions = require('./libs/interactions/init/initializeInteractions');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});

client.commands = new Collection();

(async () => {
    logger.info(`Bot beginning startup`);

    const commands = await initializeInteractions();
    commands.forEach(command => {
        client.commands.set(command.data.name, command);
    });

    client.on('ready', ready);
    client.on('guildCreate', guildCreate);
    client.on('guildDelete', guildDelete)
    client.on('interactionCreate', interactionCreate);
    client.on('messageCreate', messageCreate);

    logger.info('Authenticating with Discord');
    await client.login(DiscordToken);
    logger.info('Completed Discord authentication');
})();