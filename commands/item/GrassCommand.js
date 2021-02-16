const commando = require('discord.js-commando')

class GrassCommand extends commando.Command {
    /**
     * AvatarCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'grass',
            description: '草の値段がわかるよ！',
            memberName: 'grass',
            group: 'item'
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message) {
        return message.say('草')
    }
}

module.exports = GrassCommand