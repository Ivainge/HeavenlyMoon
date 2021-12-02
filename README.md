### To start you need:

Obtain a Bot Token From [Here](https://discord.com/developers)
Replace the Token in config.json
```json
{
    "token": "you token",
    "cfg": {
        "intents": [
            "GUILDS",
            "GUILD_BANS",
            "GUILD_EMOJIS_AND_STICKERS",
            "GUILD_INTEGRATIONS",
            "GUILD_WEBHOOKS",
            "GUILD_INVITES",
            "GUILD_VOICE_STATES",
            "GUILD_MESSAGES",
            "GUILD_MESSAGE_REACTIONS",
            "GUILD_MESSAGE_TYPING",
            "DIRECT_MESSAGES",
            "DIRECT_MESSAGE_REACTIONS",
            "DIRECT_MESSAGE_TYPING"
        ]
    }
}
```
> Note: This bot needs a [Node.js v16+](https://nodejs.org/en/blog/release/v16.0.0/)

To run bot type:
```
npm i
node .
```

# Congratulations! You successfully install and run bot!
