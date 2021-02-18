const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Cane = require('../../Model/item/Canes');

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
            group: 'item',
            examples: ['!cane 回復の杖'],
            args: [{
                key: 'name',
                prompt: '何の杖を知りたい?',
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
        var embed;
        // 杖クラスのインスタンス化
        const cane = new Cane(name);
        if (cane.isSetItem()) {
            // 名前
            var name = cane.getName();
            // 回数情報取得
            var minCount = cane.getMinCount();
            var maxCount = cane.getMaxCount();
            var count = '';
            var bidPrice = '';
            var sellingPrice = '';

            // 0回などで出現するのへの対応
            if (minCount == maxCount) {
                // 買値情報取得
                var minSellingPrice = cane.calcSellingPrice(maxCount);
                var minBidPrice = cane.getMinBidPrice(minCount);
                count = `${minCount}`
                bidPrice = `${minBidPrice}`
                sellingPrice = `${minSellingPrice}`
            } else {
                // 買値情報取得
                var maxBidPrice = cane.calcBidPrice(maxCount);
                var minBidPrice = cane.getMinBidPrice(minCount);
                // 売値情報取得
                var maxSellingPrice = cane.calcSellingPrice(maxCount);
                var minSellingPrice = cane.calcSellingPrice(minCount);
                count = `${minCount}〜${maxCount}`
                bidPrice = `${minBidPrice}〜${maxBidPrice}`
                sellingPrice = `${minSellingPrice}〜${maxSellingPrice}`
            }
            // 説明文作成
            var description = `買値:${bidPrice}\n` +
                `売値:${sellingPrice}\n` +
                `${count}回で出現するよ`;
            embed = new MessageEmbed()
                .setTitle(name)
                .setColor("#5d62ff")
                .setDescription(description);
        } else {
            var description = cane.getItemList();
            embed = new MessageEmbed()
                .setTitle('杖のリスト')
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

module.exports = CaneCommand