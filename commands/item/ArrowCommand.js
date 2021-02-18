const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Arrow = require('../../Model/item/Arrows');

class ArrowCommand extends commando.Command {
    /**
     * ArrowCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'arrow',
            description: '矢の値段がわかるよ！',
            memberName: 'arrow',
            group: 'item',
            args: [{
                key: 'name',
                prompt: '何の矢を知りたい?',
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
        // 返却用
        var embed;
        const arrow = new Arrow(name);
        if (arrow.isSetItem()) {
            // 名前
            var name = arrow.getName();
            // 強さ
            var strength = arrow.getStrength();
            // 買値情報取得
            var bidPrice = arrow.getBidPrice();
            // 売値情報取得
            var sellingPrice = arrow.getSellingPrice();
            // 回数情報取得
            var minCount = arrow.getMinCount();
            var maxCount = arrow.getMaxCount();
            // 説明文作成
            var description = `買値:${bidPrice}\n` +
                `売値:${sellingPrice}\n` +
                `強さ:${strength}\n` +
                `${minCount}〜${maxCount}個で出現するよ`;
            embed = new MessageEmbed()
                .setTitle(name)
                .setColor("#5d62ff")
                .setDescription(description);
        } else {
            var description = arrow.getItemList();
            embed = new MessageEmbed()
                .setTitle('矢のリスト')
                .setColor("#5d62ff")
                .setDescription(description);
        }
        return message.channel.send(embed).then(async function (msg) {
            let reactList = ['👍', '👎'];
            reactList.forEach(react => {
                msg.react(react);
            });
        }).catch(console.error);
    }
}

module.exports = ArrowCommand