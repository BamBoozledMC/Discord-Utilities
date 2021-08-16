const config = require('../config.json');
const {Discord, MessageAttachment, MessageEmbed} = require ("discord.js");
const randomPuppy = require('random-puppy')
const talkedRecently = new Set();

module.exports = {
	name: 'cat',
    descrption: 'send some cute cat pics',
    aliases: ['cats'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        if(!message.guild.me.permissionsIn(message.channel).has("ATTACH_FILES")) return message.lineReply(":x: I dont have permissions to Attach Files in this channel!")
        const subReddits = [
            'cat',
            'cats',
        ]
        const cat = subReddits[Math.floor(Math.random() * subReddits.length)]
        const img = await randomPuppy(cat)
        if (img.endsWith(".mp4")) return require('./cat.js').execute(bot, message, args);
        let generating = await message.lineReply("<a:loading:735109207547707523> Generating cat, Please be patient.")

        
        let memepic = new MessageEmbed()
        .setTitle(`Cats!`)
        .setURL(`https://www.reddit.com/r/${cat}`)
        .setColor("AQUA")
        .setImage(img)
        .setDescription(`If the content does not load use this link.\n${img}`)
        .setFooter(`Developed by ${myTag}`, myAvatar)

        let msg = await generating.edit("", memepic).catch(error =>{
			generating.edit(":x: The file I attempted to upload was too large.").catch(error =>{
            })
        })

        /* msg.react('❌');

        const filter = (reaction, user) => {
	        return ['❌'].includes(reaction.emoji.name) && user.id !== bot.user.id;
        };

        msg.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
	    .then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '❌') {
            msg.delete().catch(error =>{
            })
        }
    })
	.catch(collected => {
        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(bot.user.id));
try {
	for (const reaction of userReactions.values()) {
		reaction.users.remove(bot.user.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}
    });  */
        // message.channel.send(":x: Sorry, this command is currently disabled. For more information please contact `NightCrafter1#0882`")
    }
    }