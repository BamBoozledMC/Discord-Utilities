const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'consolelog',
    descrption: 'sends provided message to console',
    aliases: ['cl'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        if (message.author.id != config.ownerID) return
		if (message.author.bot) return;
		let msgtolog = args.join(" ");
		if (!msgtolog) return
        await console.log(`From ${message.author.tag} In ${message.guild.name} (ID: ${message.guild.id}): ${msgtolog}`)
        message.author.send(`Message successfully deliverd to console! \`\`\`${msgtolog}\`\`\``)
		message.delete().catch(error =>{
		})
    }
}