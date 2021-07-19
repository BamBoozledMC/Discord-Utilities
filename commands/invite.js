const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'invite',
    descrption: 'Sends a link to invite the bot',
	usage: '',
	args: true,
	async execute(bot, message, args, myUsername, myTag, myAvatar) {

		let input;
    	if(args[0]) input = args[0].toLowerCase();
   	 	else input = args[0];
		if (input == "bot") {
		let embed = new Discord.MessageEmbed()
		.setTitle('Add me to your Server')
		.setDescription('Use this [**Link**](https://discord.com/api/oauth2/authorize?client_id=645970627542515733&permissions=536210519&redirect_uri=https%3A%2F%2Fdiscord.gg%2FpXCkAqk&response_type=code&scope=bot%20guilds) to invite me to your server!')
		.setFooter(`Developed by ${myTag}`, myAvatar)
		.setColor('AQUA')
		message.channel.send(embed).catch(error =>{
			message.author.send(":x: I dont have permissions to send messages in that channel!").catch(error =>{
			})
		})}

		else if (input == "support") {
			let embed2 = new Discord.MessageEmbed()
			.setTitle('Join our Support Server')
			.setDescription('Join our Support Server [**here**](https://discord.gg/pXCkAqk) if you have any issues, require assistance or have any questions.')
			.setFooter(`Developed by ${myTag}`, myAvatar)
			.setColor('AQUA')
			message.channel.send(embed2).catch(error =>{
				message.author.send(":x: I dont have permissions to send messages in that channel!").catch(error =>{
				})
			})} 
			else {
				let invitehelp = new Discord.MessageEmbed()
				.setTitle('Valid Types')
				.addField("Bot:", "Sends a link to invite me to your server!")
				.addField("Support:", "Sends a link to join our Support Server")
				.setFooter(`Developed by ${myTag}`, myAvatar)
				.setColor('#ff5c00')
				message.channel.send(invitehelp).catch(error =>{
					message.author.send(":x: I dont have permissions to send messages in that channel!").catch(error =>{
					})
				})}

		message.delete().catch(error =>{
		})
    }
}
