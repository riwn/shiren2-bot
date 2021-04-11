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

class SearchBidCommand extends commando.Command {
    /**
     * SearchBidCommand constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'searchbid',
            description: '買値からアイテムがわかるよ！',
            memberName: 'searchbid',
            group: 'item',
            examples: ['!searchbid scroll 200'],
            args: [{
                key: 'type',
                prompt: 'アイテムの種類',
                type: 'string',
            }, {
                key: 'bidValue',
                prompt: '買値は?',
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
        bidValue
    }) {
        var embed;
        var item;
        var title;
        var description;
        // typeのクラスのインスタンス化
        switch (type) {
            case 'arrow':
                item = new Arrow("");
                title = "投擲買値検索";
                break;
            case 'bracelet':
                item = new Bracelet("");
                title = "腕輪買値検索";
                description = item.printSameBidBracelets(bidValue);
                break;
            case 'cane':
                item = new Cane("");
                title = "杖買値検索";
                break;
            case 'grass':
                item = new Grass("");
                title = "草買値検索";
                description = item.printSameBidGrasses(bidValue);
                break;
            case 'pot':
                item = new Pot("");
                title = "壺買値検索";
                break;
            case 'rice':
                item = new Rice("");
                title = "飯買値検索";
                description = item.printSameBidRices(bidValue);
                break;
            case 'scroll':
                item = new Scroll("");
                title = "巻物買値検索";
                description = item.printSameBidScrolls(bidValue);
                break;
            case 'shield':
                item = new Shield("");
                title = "盾買値検索";
                break
            case 'weapon':
                item = new Weapon("");
                title = "武器買値検索";
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

module.exports = SearchBidCommand