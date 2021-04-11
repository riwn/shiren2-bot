const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Asuka = require('../../Model/character/Asuka');

class AsukaCommand extends commando.Command {
    /**
     * ArrowCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'asuka',
            description: 'アスカの情報がわかるよ！',
            memberName: 'asuka',
            group: 'character',
            args: [{
                key: 'lv',
                prompt: 'レベルはいくつ？',
                type: 'integer',
            }]
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message, {
        lv
    }) {
        const asuka = new Asuka(lv);
        var asuka_attack = asuka.getAttack();
        var asuka_defence = asuka.getDefence();
        var description = `基礎攻撃力:${asuka_attack}\n` +
                         `防御力:${asuka_defence}`;
        var embed = new MessageEmbed()
            .setTitle('アスカ')
            .setColor("#5d62ff")
            .setDescription(description);
        
        return message.channel.send(embed).then(async function (msg) {
            let reactList = ['👍', '👎'];
            reactList.forEach(react => {
                msg.react(react);
            });
        }).catch(console.error);
    }
}

module.exports = AsukaCommand