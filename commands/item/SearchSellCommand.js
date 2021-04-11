const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Arrow = require('../../Model/item/Arrows');
const Bracelet = require('../../Model/item/Bracelets');
const Cane = require('../../Model/item/Canes');
const Grass = require('../../Model/item//Grasses');
const Pot = require('../../Model/item/Pots');
const Rice = require('../../Model/item/Rices');
const Scroll = require('../../Model/item/Scrolls');
const Shield = require('../../Model/item/Shields');
const Weapon = require('../../Model/item/Weapons');

class SearchSellCommand extends commando.Command {
    /**
     * SearchSellCommand constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'searchsell',
            description: '売値からアイテムがわかるよ！',
            memberName: 'searchsell',
            group: 'item',
            examples: ['!searchsell scroll 250'],
            args: [{
                key: 'type',
                prompt: 'アイテムの種類',
                type: 'string',
            }, {
                key: 'sellValue',
                prompt: '売値は?',
                type: 'integer',
            }]
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message, {
        type,
        sellValue
    }) {
        var embed;
        var item;
        var title;
        var description;
        // typeのクラスのインスタンス化
        switch (type) {
            case 'arrow':
                item = new Arrow("");
                title = "投擲売値検索";
                break;
            case 'bracelet':
                item = new Bracelet("");
                title = "腕輪売値検索";
                break;
            case 'cane':
                item = new Cane("");
                title = "杖売値検索";
                break;
            case 'grass':
                item = new Grass("");
                title = "草売値検索";
                break;
            case 'pot':
                item = new Pot("");
                title = "壺売値検索";
                break;
            case 'rice':
                item = new Rice("");
                title = "飯売値検索";
                description = item.printSameSellRices(sellValue);
                break;
            case 'scroll':
                item = new Scroll("");
                title = "巻物売値検索";
                description = item.printSameSellScrolls(sellValue);
                break;
            case 'shield':
                item = new Shield("");
                title = "盾売値検索";
                break
            case 'weapon':
                item = new Weapon("");
                title = "武器売値検索";
                break
            default:
                title = "未実装";
                description = 'まだ実装されていないよ。ごめんね。';
                break
        }

        embed = new MessageEmbed()
            .setTitle(title)
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

module.exports = SearchSellCommand