const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'clear',
	descrption: 'Deletes given amount of messages',
	aliases: ['clean', 'purge'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
	try {
		
	//if(message.author.id == "442702793002844170") return message.channel.send("Oh- Hey there <@442702793002844170>!\nI'ma have to deny you from using this command as you seem to be using it alot.")
    if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: I do not have enough permissions to do this!\nPlease make sure i have the \"MANAGE_MESSAGES\" permission.")
	const user = message.mentions.users.first();
	let xdemb = new Discord.MessageEmbed()
	  		.setColor("AQUA")
	  		.setTitle("Clear Command")
			.addField("Description:", `Delete a certain amount of messages.\n(Limited to 100 due to discord)`, true)
	 		.addField("Usage:", `${prefix}clear <amount>\n${prefix}clear [@user] <amount>`, true)
	 		.addField("Example:" ,`${prefix}clear 10\n${prefix}clear @BamBoozled 25`)
			.setFooter(`Developed by ${myTag}`, myAvatar)
			const amount = !!parseInt(args[0]) ? parseInt(args[0]) : parseInt(args[1])
		  if(!amount || isNaN(amount)) return message.channel.send(xdemb);
		  await message.delete()
		  await message.channel.messages.fetch({
			limit: 100,
		}).then((messages) => {
			 if (user) {
			 const filterBy = user ? user.id : bot.user.id;
			 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
		} else if (!user) {
			messages = messages.array().slice(0, amount);
		}
	   message.channel.bulkDelete(messages, true)
		});
		  
		let successmsg;
		if (user) {
			successmsg = `**${amount}** of **${user.tag}**'s messages.`
		} else {
			successmsg = `**${amount}** messages.`
		}
	 message.channel.send(`<a:completed:735703067605073951> Successfully Cleared ${successmsg}`)
	  .then(message => {
		  message.delete({timeout:5000})
	  });
		  
		  
		
		
		}catch(e){
		console.log(e.stack);
		message.channel.send(`**${e}**`)
		}
	}
}