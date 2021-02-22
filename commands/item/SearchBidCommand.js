const commando = require('discord.js-commando')
require('dotenv').config();
const {
    MessageEmbed
} = require('discord.js');
const Scroll = require('../../Model/item/Scrolls');

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
        // typeのクラスのインスタンス化
        switch (type){
            case 'scroll':
                const item = new Scroll(name);
                break
            default:
                embed = new MessageEmbed()
                .setTitle('未実装')
                .setColor("#5d62ff")
                .setDescription('まだ実装されていないよ。ごめんね。');
                break

        }
        if (item) {
            var description =item.printSameBidScrolls(bidValue);
            embed = new MessageEmbed()
                .setTitle("買値検索")
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

module.exports = ScrollCommand