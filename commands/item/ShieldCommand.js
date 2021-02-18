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
            examples: ['!shield 金の盾 3'],
            args: [{
                key: 'name',
                prompt: '何の盾を知りたい?',
                type: 'string',
            }, {
                key: 'correctionValue',
                prompt: '(任意)修正値は?',
                type: 'integer',
                default: 0,
                validator: correctionValue => {
                    if (correctionValue >= -99 && correctionValue <= 99) return true;
                    return '修正値は-99〜+99で入力してね。';
                }
            }]
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message, {
        name,
        correctionValue
    }) {
        const shield = new Shield(name);

        // 名前
        var name = shield.getName(correctionValue);
        // 強さ
        var strength = shield.getStrength(correctionValue);
        var markNum = shield.getMarkNum();
        // 買値情報取得
        var bidPrice = shield.getBidPrice(correctionValue);
        // 売値情報取得
        var sellingPrice = shield.getSellingPrice(correctionValue);
        // 説明文作成
        var description = `買値:${bidPrice}\n` +
            `売値:${sellingPrice}\n` +
            `強さ:${strength}\n` +
            `印数:${markNum}`;
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

module.exports = ShieldCommand