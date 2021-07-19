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
	let xdemb = new Discord.MessageEmbed()
	  		.setColor("AQUA")
	  		.setTitle("Clear Command")
			.addField("Description:", `Delete a certain amount of messages.\n(Limited to 100 due to discord)`, true)
	 		.addField("Usage:", `${prefix}clear [amount]`, true)
	 		.addField("Example:" ,`${prefix}clear 10`)
			.setFooter(`Developed by ${myTag}`, myAvatar)
		  if(!args[0] || isNaN(args[0]) || args[0] > 100) return message.channel.send(xdemb);
		  message.delete()
		  await message.channel.bulkDelete(args[0], true)
		  //let msg = await message.channel.send(`<a:loading:735109207547707523> Clearing **${args[0]}** messages...`)
		  //  msg.edit(`<a:completed:735703067605073951> Successfully Cleared **${args[0]}** messages`)
		 message.channel.send(`<a:completed:735703067605073951> Successfully Cleared **${args[0]}** messages`) 
		  .then(message => {
			  message.delete({timeout:5000})
		  });
		  
		  
		
		
		}catch(e){
		console.log(e.stack);
		message.channel.send(`**${e}**`)
		}
	}
}