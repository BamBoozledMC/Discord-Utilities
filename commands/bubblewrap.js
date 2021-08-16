const config = require('../config.json');
const Discord = require ("discord.js");
const talkedRecently = new Set();

module.exports = {
	name: 'bubblewrap',
    descrption: 'Returns your message',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        if (talkedRecently.has(message.author.id)) {
            message.reply("Please wait 30 seconds before using this command again!")
            .then(message => {
                message.delete({timeout:3000})
            });
        } else {
            message.channel.send("||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP||\n||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP||\n||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP||\n||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP|| ||POP||").catch(error =>{
            })

            talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 30000);
}
    }
}