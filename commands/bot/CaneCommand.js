const commando = require('discord.js-commando')

class CaneCommand extends commando.Command {
    /**
     * AvatarCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'cane',
            description: '杖の値段がわかるよ！',
            memberName: 'cane',
            group: 'item'
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message) {
        return message.say('杖')
    }
}

module.exports = CaneCommand