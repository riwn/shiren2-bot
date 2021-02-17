const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Weapon = require('../../Model/item/Weapons');

class WeaponCommand extends commando.Command {
    /**
     * WeaponCommand constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'weapon',
            description: '武器の値段がわかるよ！',
            memberName: 'weapon',
            group: 'item',
            examples: ['!weapon ドラゴンキラー'],
            args: [{
                key: 'name',
                prompt: '何の武器を知りたい?',
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
        const cane = new Cane(name);

        var maxBidPrice = cane.getMaxBidPrice();
        var minBidPrice = cane.getMinBidPrice();

        var maxSellingPrice = cane.getMaxSellingPrice();
        var minSellingPrice = cane.getMinSellingPrice()
        var minCount = cane.getMinCount();
        var maxCount = cane.getMaxCount();
        // 説明文作成
        var description = `買値:${minBidPrice}〜${maxBidPrice}\n` +
            `売値:${minSellingPrice}〜${maxSellingPrice}\n` +
            `${minCount}回〜${maxCount}回で出現するよ`;
        const embed = new MessageEmbed()
            .setTitle(cane.getName())
            .setColor("#5d62ff")
            .setDescription(description)
            .setTimestamp();
        return message.channel.send(embed)
    }
}

module.exports = WeaponCommand