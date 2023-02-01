
# Chuckle Bot

Chunckle is a meme factory designed for use within Discord, utilizing the Grasapi API.

## Screenshots

Input

![](https://media.discordapp.net/attachments/1038566253905858685/1070152615377248396/image.png)

Output

![](https://media.discordapp.net/attachments/1038566253905858685/1070153269839659058/Untitled-1.png)

## Config

Create `.dev.env` file

```bash
# APP CONFIG

DISCORD_TOKEN=
CLIENT_ID=
SHOULD_CREATE_COMMANDS=true
GRASAPI_URL=https://grasapi.fzbian.me/api/
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

 - [ ] Download the meme and send it, not send it directly and have Discord render it.
 - [ ] Pass the sending of commands to Embeds
 - [ ] Help command for displaying available memes
 - [ ] Information command to display bot information
    
## Tech Stack

 - Discord.js
 - Grasapi
 - Pino

