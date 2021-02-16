const commando = require('discord.js-commando')
require('dotenv').config();
const GetItem = require('../../stein/GetItem');
const {
    MessageEmbed
} = require('discord.js');

const CaneNameAndIdList = [{
        id: 1,
        name: "ふきとばしの杖"
    },
    {
        id: 2,
        name: "のりうつりの杖"
    },
    {
        id: 3,
        name: "場所がえの杖"
    },
    {
        id: 4,
        name: "引きよせの杖"
    },
    {
        id: 5,
        name: "回復の杖"
    },
    {
        id: 6,
        name: "ころばぬ先の杖"
    },
    {
        id: 7,
        name: "物知りの杖"
    },
    {
        id: 8,
        name: "クオーターの杖"
    },
    {
        id: 9,
        name: "鈍足の杖"
    },
    {
        id: 10,
        name: "封印の杖"
    },
    {
        id: 11,
        name: "トンネルの杖"
    },
    {
        id: 12,
        name: "とうめいの杖"
    },
    {
        id: 13,
        name: "倍速の杖"
    },
    {
        id: 14,
        name: "からぶりの杖"
    },
    {
        id: 15,
        name: "火ばしらの杖"
    },
    {
        id: 16,
        name: "不幸の杖"
    },
    {
        id: 17,
        name: "しあわせの杖"
    },
    {
        id: 18,
        name: "草投げの杖"
    },
    {
        id: 19,
        name: "草受けの杖"
    },
];

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
        // 何故か日本語の検索ができないので仕方なくidと日本語を紐つけて記載
        const target = CaneNameAndIdList.find((v) => v.name === name);
        const store = new GetItem();
        var cane = await store.get('Cane', String(target.id));
        console.log(cane);
        var maxBidPrice = Number(cane.bid_price) + Number((cane.max_count) * Number(cane.bid_increase));
        var minBidPrice = Number(cane.bid_price) + (Number(cane.min_count) * Number(cane.bid_increase));

        var maxSellingPrice = Number(cane.selling_price) + Number((cane.max_count) * Number(cane.bid_increase));
        var minSellingPrice = Number(cane.selling_price) + Number((cane.min_count) * Number(cane.bid_increase));
        const embed = new MessageEmbed()
            .setTitle(cane.name)
            .setColor("#5d62ff")
            .setDescription(`買値:${minBidPrice}〜${maxBidPrice}\n売値:${minSellingPrice}〜${maxSellingPrice}\n${cane.min_count}回〜${cane.max_count}回で出現するよ`)
            .setTimestamp();
        return message.channel.send(embed)
    }
}

module.exports = CaneCommand