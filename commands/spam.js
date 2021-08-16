const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'spam',
    descrption: 'Returns your message 5 times',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
		if (message.author.bot) return;
        if(message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
		let msgtosend = args.join(" ");
		if (!msgtosend) {
			let errMSG = await message.reply('Sorry, but you need to include for me to say!')
			return errMSG.delete({timeout:3000});
		}
        message.channel.send(msgtosend)
        message.channel.send(msgtosend)
        message.channel.send(msgtosend)
        message.channel.send(msgtosend)
        message.channel.send(msgtosend)
		message.delete().catch(error =>{
		})
    }
}