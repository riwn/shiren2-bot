const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Bracelets = require('../../Model/item/Bracelets');

class BraceletCommand extends commando.Command {
    /**
     * BraceletCommand constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'bracelet',
            description: '腕輪の値段がわかるよ！',
            memberName: 'bracelet',
            group: 'item',
            examples: ['!bracelet パコレプキンの腕輪'],
            args: [{
                key: 'name',
                prompt: '何の腕輪を知りたい?',
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
        const bracelet = new Bracelets(name);
        // 名前
        var name = bracelet.getName();
        // 買値情報取得
        var bidPrice = bracelet.getBidPrice();
        // 売値情報取得
        var sellingPrice = bracelet.getSellingPrice();
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

module.exports = BraceletCommand