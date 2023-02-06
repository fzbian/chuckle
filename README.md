
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
# APP CONFIG

BOT_NAME=Chuckle
SHOULD_CREATE_COMMANDS=true
GRASAPI_URL=https://grasapi.fzbian.me/api/

# TOKENS

DISCORD_TOKEN=
CLIENT_ID=

# COLORS
MAIN_COLOR=de8723
GREEN_COLOR=1cd44d
RED_COLOR=d41c1c

# CHANNELS
MOVEMENT_CHANNEL=
INTERACTION_CHANNEL=

# USERS
DEVELOPER=
```

## Installation

Install chuncle with pnpm

```bash
git clone https://github.com/fzbian/chuckle.git
pnpm install
cd chuckle
pnpm start
```

## Tech Stack

 - Discord.js
 - Grasapi
 - Pino

