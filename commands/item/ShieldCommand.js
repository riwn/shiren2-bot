const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Shield = require('../../Model/item/Shields');

class ShieldCommand extends commando.Command {
    /**
     * ShieldCommand constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'shield',
            description: '盾の値段がわかるよ！',
            memberName: 'shield',
            group: 'item',
            examples: ['!shield 金の盾'],
            args: [{
                key: 'name',
                prompt: '何の盾を知りたい?',
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
        const shield = new Shield(name);

        // 強さ
        var strength = shield.getStrength();
        var markNum = shield.getMarkNum();
        // 買値情報取得
        var bidPrice = shield.getBidPrice();
        // 売値情報取得
        var sellingPrice = shield.getSellingPrice();
        // 説明文作成
        var description = `買値:${bidPrice}\n` +
            `売値:${sellingPrice}\n` +
            `強さ:${strength}\n` +
            `印数:${markNum}`;
        const embed = new MessageEmbed()
            .setTitle(shield.getName())
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

module.exports = ShieldCommand