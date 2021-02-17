const commando = require('discord.js-commando');
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Rice = require('../../Model/item/Rices');

class RiceCommand extends commando.Command {
    /**
     * AvatarCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'rice',
            description: 'おにぎりの値段がわかるよ！',
            memberName: 'rice',
            group: 'item',
            examples: ['!rice 大きなおにぎり'],
            args: [{
                key: 'name',
                prompt: '何のおにぎりを知りたい?',
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
        const rice = new Rice(name);
        // 名前
        var name = rice.getName();
        // 買値情報取得
        var bidPrice = rice.getBidPrice();
        // 売値情報取得
        var sellingPrice = rice.getSellingPrice();
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

module.exports = RiceCommand