const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'removerole',
    descrption: 'DMs mentioned user with your message',
    aliases: ['rr', 'remover', 'roleremove'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
		// if(message.author.id != config.resID) return;
		if(message.author.id != config.ownerID) if(message.author.id != config.resID) return;
		let xdemb = new Discord.MessageEmbed()
	  		.setColor("AQUA")
	  		.setTitle("RemoveRole Command")
			.addField("Description:", `Removes a role from a user`, true)
	 		.addField("Usage:", `${prefix}removerole <@user | userID> <@role>`, true)
	 		.addField("Example:" ,`${prefix}removerole @NightCrafter1 @Moderator`)
		let member;
		if(args[0]) {
		  let mention;
		  if(message.mentions.members.first()) {
			if(message.mentions.members.first().user.id == bot.user.id) {
			  mention = message.mentions.members.array()[1];
			} else {
			  mention = message.mentions.members.first();
			}
		  }

			if(!mention) {

				if(isNaN(args[0])) member = bot.users.cache.find(u => u.tag == args[0]);
				else member = bot.users.cache.get(args[0]);

			} else if(mention) {

				if(!args[0].startsWith('<@') || !args[0].endsWith('>')) member = bot.users.cache.find(u => u.tag == args[0]);
				else if(args[0].startsWith('<@') && args[0].endsWith('>')) {

					mention = args[0].slice(2, -1)
					if(mention.startsWith('!')) mention = mention.slice(1);

					member = bot.users.cache.get(mention);

				}  else return message.channel.send(xdemb);
			}  else return message.channel.send(xdemb);

		} else return message.channel.send(xdemb);
			
		if (!member) return message.channel.send(xdemb);
		else member = message.guild.members.cache.get(member.id);
		if (!member) return message.channel.send(xdemb);
            message.delete()
            if(member == null) return message.channel.send(xdemb)
			mentionMessage = args.slice(1).join(" ");
			try {
            member.send(mentionMessage);            
			message.channel.send(`:thumbsup: Successfully DM'd **${member.user.username}**!`)
			.then(message => {
				message.delete({timeout:5000})
			});
		} catch(e){
			console.log(e)
			message.reply(`:x: An Error occurred whilst messaging that user!\nAre their DMs closed? Did they block me?`)
		}
			
    }
}