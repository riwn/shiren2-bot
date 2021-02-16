const commando = require('discord.js-commando');
class RiceCommand extends commando.Command {
    /**
     * AvatarCommando constructor
     * @param {commando.CommandoClient} client
     */
    constructor(client) {
        super(client, {
            name: 'rice',
            description: 'おにぎりの値段がわかるよ！',
            memberName: 'rice',
            group: 'item',
            examples: ['!rice 2'],
            args: [{
                key: 'number',
                prompt: '何番のおにぎりを知りたい?',
                type: 'integer',
                default: 1129,
                validate: number => {
                    if (number > 0 && number < 11 || number == 1129) return true;
                    return 'ちゃんとした番号入れてね';
                }
            }]
        })
    }

    /**
     * コマンドが実行されたときにする処理
     * @param {commando.CommandMessage} message
     */
    async run(message, {
        number
    }) {
        message.say(number)
            .then(async function (msg) {
                let reactList = ['👍', '👎'];
                reactList.forEach(react => {
                    msg.react(react);
                });
            }).catch(console.error);
    }
}

module.exports = RiceCommand