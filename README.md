
# Chuckle Bot

Chunckle is a meme factory designed for use within Discord, utilizing the Grasapi API.

## Screenshots

Input

![](https://media.discordapp.net/attachments/1038566253905858685/1071247027616354355/image.png)

Output

![](https://media.discordapp.net/attachments/1038566253905858685/1071247081659973823/image.png)

## Config

Create `.env` file

```bash
BOT_NAME=
DISCORD_TOKEN=
CLIENT_ID=
SHOULD_CREATE_COMMANDS=
GRASAPI_URL=https://grasapi.fzbian.me/api/
MAIN_COLOR=
```

## Installation

Install chuncle with pnpm

```bash
git clone https://github.com/fzbian/chuckle.git
pnpm install
cd chuckle
pnpm start
```

## To-do

 - [x] Download the meme and send it, not send it directly and have Discord render it.
 - [x] Pass the sending of commands to Embeds
 - [x] Help command for displaying available memes
 - [x] Information command to display bot information
    
## Tech Stack

 - Discord.js
 - Grasapi
 - Pino

