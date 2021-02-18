const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Grass = require('../../Model/item/Grasses');

class GrassCommand extends commando.Command {
    /**
     * AvatarCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'grass',
            description: '草の値段がわかるよ！',
            memberName: 'grass',
            group: 'item',
            examples: ['!grass 弟切草'],
            args: [{
                key: 'name',
                prompt: '何の草を知りたい?',
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
        // 草クラスのインスタンス化
        const grass = new Grass(name);
        if (grass.isSetItem()) {
            // 名前
            var name = grass.getName();
            // 買値情報取得
            var bidPrice = grass.getBidPrice();
            // 売値情報取得
            var sellingPrice = grass.getSellingPrice();
            // 説明文作成
            var description = `買値:${bidPrice}\n` +
                `売値:${sellingPrice}`;
            embed = new MessageEmbed()
                .setTitle(name)
                .setColor("#5d62ff")
                .setDescription(description);
        } else {
            var description = grass.getItemList();
            embed = new MessageEmbed()
                .setTitle('草のリスト')
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

module.exports = GrassCommand