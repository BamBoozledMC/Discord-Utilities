const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'ping',
	description: 'Checks the bot\'s ping',
	usage: '!ping',
	args: false,
	async execute(bot, message, args, ping) {
		try {
        const pingMsg =  await message.channel.send('Pinging...');
		return pingMsg.edit(`
		Pong! __Roundtrip__: **${
				(pingMsg.editedTimestamp || pingMsg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
			}ms.** | __API__: **${
				bot.ws.ping
			}ms**
		`);
    }catch(e){
		message.author.send(":x: I dont have permissions to send messages in that channel!").catch(error =>{
			})
	  }
}
}