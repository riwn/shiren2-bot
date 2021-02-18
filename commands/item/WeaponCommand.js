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
            examples: ['!weapon ドラゴンキラー 6'],
            args: [{
                key: 'name',
                prompt: '何の武器を知りたい?',
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
        const weapon = new Weapon(name, correctionValue);

        // 名前
        var name = weapon.getName(correctionValue);
        // 強さ
        var strength = weapon.getStrength(correctionValue);
        var markNum = weapon.getMarkNum();
        // 買値情報取得
        var bidPrice = weapon.getBidPrice(correctionValue);
        // 売値情報取得
        var sellingPrice = weapon.getSellingPrice(correctionValue);
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

module.exports = WeaponCommand