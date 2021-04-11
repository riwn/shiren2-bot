require('dotenv').config();

const querystring = require('querystring');
const commando = require('discord.js-commando');
const Wake = require('app/Wake');
const path = require('path');
const sqlite = require('sqlite');

const wake = new Wake();

// Options: https://discord.js.org/#/docs/commando/master/typedef/CommandoClientOptions
const client = new commando.CommandoClient({
    owner: process.env.DISCORD_OWNER,
    unknownCommandResponse: false,
    commandPrefix: '!'
})

// Docs: https://discord.js.org/#/docs/commando/master/class/CommandoClient
client
    .on('error', console.error)
    .on('ready', () => {
        console.log('Ready!')
    })

// Docs: https://discord.js.org/#/docs/commando/master/class/CommandoRegistry
client.registry
    .registerDefaultGroups()
    .registerDefaultTypes()
    .registerDefaultCommands({
        help: true,
        prefix: false,
        ping: false,
        eval: false,
        unknownCommand: false,
        commandState: false,
    })
    .registerGroups([
        ['item', 'アイテム']
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))

// Docs: https://discord.js.org/#/docs/commando/master/general/first-steps
client.setProvider(
    sqlite.open(path.join(__dirname, 'database', 'settings.sqlite3')).then((db) => new commando.SQLiteProvider(db))
).catch(console.error)

client.login(process.env.DISCORD_TOKEN)