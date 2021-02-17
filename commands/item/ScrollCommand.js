const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Scroll = require('../../Model/item/Scrolls');

class ScrollCommand extends commando.Command {
    /**
     * ScrollCommand constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'scroll',
            description: '盾の値段がわかるよ！',
            memberName: 'scroll',
            group: 'item',
            examples: ['!scroll 聖域の巻物'],
            args: [{
                key: 'name',
                prompt: '何の巻物を知りたい?',
                type: 'string',
            }]
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message, {
        name
    }) {
        const scroll = new Scroll(name);
        // 名前
        var name = scroll.getName();
        // 買値情報取得
        var bidPrice = scroll.getBidPrice();
        // 売値情報取得
        var sellingPrice = scroll.getSellingPrice();
        // 説明文作成
        var description = `買値:${bidPrice}\n` +
            `売値:${sellingPrice}`;
        const embed = new MessageEmbed()
            .setTitle(name)
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

module.exports = ScrollCommand