const commando = require('discord.js-commando');
const {
    MessageEmbed
} = require('discord.js');

class TestCommand extends commando.Command {
    /**
     * AvatarCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'test',
            description: 'テスト用だよ',
            memberName: 'test',
            group: 'item'
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message) {
        // メッセージをそのまま発する
        message.say('草')
            .then(async function (msg) {
                // リアクションするとき用
                let reactList = ['👍', '👎', '🤷'];
                reactList.forEach(react => {
                    msg.react(react);
                });
            }).catch(console.error);

        // 埋め込みメッセージ
        const embed = new MessageEmbed()
            .setTitle('テスト用')
            .setColor("#5d62ff")
            .setDescription('テスト')
            .setTimestamp();
        message.channel.send(embed)
            .then(message => {
                message.react('➡️');
                const filter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
                const collector = message.createReactionCollector(filter, {
                    time: 1500
                });

                collector.on('collect', () => {
                    message.reactions.removeAll();

                    const embed = new MessageEmbed()
                        .setColor('#007FFF')
                        .setDescription('Test #2');

                    message.channel.edit(embed);
                });
            })
            .catch(err => console.error(err));
        // return message.say('草')
    }
}

module.exports = TestCommand