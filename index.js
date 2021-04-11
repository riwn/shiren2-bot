require('dotenv').config();

const http = require('http');
const querystring = require('querystring');
const commando = require('discord.js-commando')
const path = require('path')
const sqlite = require('sqlite')

http.createServer(function (req, res) {
    if (req.method == 'POST') {
        var data = "";
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            if (!data) {
                console.log("No post data");
                res.end();
                return;
            }
            var dataObject = querystring.parse(data);
            console.log("post:" + dataObject.type);
            if (dataObject.type == "wake") {
                console.log("Woke up in post");
                res.end();
                return;
            }
            res.end();
        });
    } else if (req.method == 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Discord Bot is active now\n');
    }
}).listen(3000);

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
        ['item', 'アイテム'],
        ['character', 'キャラクター']
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))

// Docs: https://discord.js.org/#/docs/commando/master/general/first-steps
client.setProvider(
    sqlite.open(path.join(__dirname, 'database', 'settings.sqlite3')).then((db) => new commando.SQLiteProvider(db))
).catch(console.error)

client.login(process.env.DISCORD_TOKEN)