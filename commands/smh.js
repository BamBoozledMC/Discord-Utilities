const config = require('../config.json');
const {Discord, MessageAttachment} = require ("discord.js");
const talkedRecently = new Set();

module.exports = {
	name: 'smh',
    descrption: 'sends the smh',
    aliases: ['shakemyhead'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.reply("Please wait 30 seconds before using this command again!")
            .then(message => {
                message.delete({timeout:3000})
            });
        } else {
    const picture = new MessageAttachment('./memes/SMH.jpg');
    await message.channel.send(picture).catch(error =>{
        message.author.send(":x: I dont have permissions to send messages/Attach Files in that channel!").catch(error =>{
        })
    })
    // await message.channel.send(":x: Sorry, this command is currently disabled. For more information please contact `NightCrafter1#0882`")
    message.delete().catch(error =>{
    })
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 30000);
}
    }
}