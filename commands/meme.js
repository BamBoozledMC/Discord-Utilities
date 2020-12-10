const config = require('../config.json');
const {Discord, MessageAttachment} = require ("discord.js");
const randomPuppy = require('random-puppy')
const talkedRecently = new Set();

module.exports = {
	name: 'meme',
    descrption: 'meme',
    aliases: ['memes'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args) {
        message.channel.startTyping()
        .catch(error =>{
        })
        const subReddits = [
            'meme',
            'memes',
            'me_irl',
            '2meirl4meirl',
            'dankmemes',
            'techsupportanimals',
            'wholesomememes',
            'MemeEconomy',
            'ihadastroke',
        ]
        const meme = subReddits[Math.floor(Math.random() * subReddits.length)]
        const img = await randomPuppy(meme)
        const memepic = new MessageAttachment(img)
        let msg = await message.channel.send(`*Please note: I am not responsible for any "Inappropriate" content,*\n*If you believe something is inappropriate simply react to the :x: below.\n(Reaction will be automatically removed after 30 seconds)*\n\`\`\`https://www.reddit.com/r/${meme}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${img}\`\`\``, memepic).catch(error =>{
			message.channel.send(":x: I dont have permissions to Attach Files in this channel!\nIf I already have the correct permissions, the file i attempted to upload was too big. ;)").catch(error =>{
            })
        })
        message.channel.stopTyping()

        msg.react('❌');

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
    });
        // message.channel.send(":x: Sorry, this command is currently disabled. For more information please contact `NightCrafter1#0882`")
    }
    }