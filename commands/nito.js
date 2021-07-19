const config = require('../config.json');
const {Discord, MessageAttachment} = require ("discord.js");
const talkedRecently = new Set();

module.exports = {
	name: 'nito',
    descrption: 'sends nito',
    aliases: ['nitto', 'nitro'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, myUsername, myTag, myAvatar) {
        if (talkedRecently.has(message.author.id)) {
            message.reply("Please wait 10 seconds before using this command again!")
            .then(message => {
                message.delete({timeout:3000})
            });
        } else {
    const picture = new MessageAttachment('./memes/nito.jpg');
    await message.lineReplyNoMention(picture).catch(error =>{
        message.author.send(":x: I dont have permissions to send messages/Attach Files in that channel!").catch(error =>{
        })
    })
    // await message.channel.send(":x: Sorry, this command is currently disabled. For more information please contact `NightCrafter1#0882`")
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 10000);
}
    }
}