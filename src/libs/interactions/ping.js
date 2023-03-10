const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gives a quick pong back to verify the bot is up and running'),
    async execute(interaction, client) {
        console.log(client)
        await interaction.reply('Pong!');
    }
}