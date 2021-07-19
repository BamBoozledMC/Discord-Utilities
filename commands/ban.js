const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'ban',
    descrption: 'bans mentioned user from the server',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: I do not have enough permissions to do this!\nPlease make sure i have the \"BAN_MEMBERS\" permission.")
		// if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(":x: I do not have permission to send messages in this channel!\nPlease make sure i have the \"SEND_MESSAGES\" permission in the channel overrides/permissions")
	  let xdemb = new Discord.MessageEmbed()
	  .setColor("AQUA")
	  .setTitle("Ban Command")
	  .addField("Description:", `Ban a member`, true)
	  .addField("Usage:", `${prefix}ban <@user | userID> [reason]`, true)
	  .addField("Example:" ,`${prefix}ban @BamBoozled spam`)
	  .setFooter(`Developed by ${myTag}`, myAvatar)
	
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
		  
		if(!member.bannable) 
		  return message.channel.send("I cannot ban this user!");
	
		
		
          let reason = args.slice(1).join(" ");
		if(!reason) {
		  res = "No reason given";
		}
		else {
		  res = `${reason}`
		}
		
	  member.send(`You have been banned from **${message.guild.name}** for the reason: **${res}**`)
		await member.ban(reason)
		  .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
	
		  let bean = new Discord.MessageEmbed()
		  .setColor("AQUA")
		  .setTitle(`Ban | ${member.user.tag}`)
		  .addField("User", member, true)
		  .addField("Moderator", message.author, true)
		  .addField("Reason", res)
		  .setTimestamp()
		  .setFooter(member.id)
	
		  message.channel.send(bean)

		  message.delete()
    }
}