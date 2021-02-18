const commando = require('discord.js-commando');
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Pot = require('../../Model/item/Pots');

class PotCommand extends commando.Command {
    /**
     * PotCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'pot',
            description: '壺の値段がわかるよ！',
            memberName: 'pot',
            group: 'item',
            examples: ['!pot ほぞんの壺'],
            args: [{
                key: 'name',
                prompt: '何の壺を知りたい?',
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
        const pot = new Pot(name);
        if (pot.isSetItem()) {
            // 名前
            var name = pot.getName();
            // 回数情報取得
            var minCount = pot.getMinCount();
            var maxCount = pot.getMaxCount();
            var count = '';
            var bidPrice = '';
            var sellingPrice = '';

            // 容量0などで出現するのへの対応
            if (minCount == maxCount) {
                // 買値情報取得
                var minSellingPrice = pot.calcSellingPrice(maxCount);
                var minBidPrice = pot.getMinBidPrice(minCount);
                count = `${minCount}`
                bidPrice = `${minBidPrice}`
                sellingPrice = `${minSellingPrice}`
            } else {
                // 買値情報取得
                var maxBidPrice = pot.calcBidPrice(maxCount);
                var minBidPrice = pot.getMinBidPrice(minCount);
                // 売値情報取得
                var maxSellingPrice = pot.calcSellingPrice(maxCount);
                var minSellingPrice = pot.calcSellingPrice(minCount);
                count = `${minCount}〜${maxCount}`
                bidPrice = `${minBidPrice}〜${maxBidPrice}`
                sellingPrice = `${minSellingPrice}〜${maxSellingPrice}`
            }
            // 説明文作成
            var description = `買値:${bidPrice}\n` +
                `売値:${sellingPrice}\n` +
                `容量${count}で出現するよ`;
            embed = new MessageEmbed()
                .setTitle(name)
                .setColor("#5d62ff")
                .setDescription(description);
        } else {
            var description = pot.getItemList();
            embed = new MessageEmbed()
                .setTitle('壺のリスト')
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

module.exports = PotCommand