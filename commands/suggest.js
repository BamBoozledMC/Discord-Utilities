const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'suggest',
    descrption: 'Returns your message',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
		if (message.author.bot) return;
		if (message.guild.id != "856233016909234177") return message.reply("This command is not enabled in your guild.");
		if (message.content.includes("@everyone"))  return;
		if (message.content.includes("@here")) return;
		let msgtosend = args.join(" ")
		if (!msgtosend) {
			let errMSG = await message.reply('Sorry, but you need to include a suggestion!').catch(error =>{
			})
			return errMSG.delete({timeout:3000});
		}
		let embed = new Discord.MessageEmbed()
		.setTimestamp()
		.setAuthor(message.author.tag, message.author.displayAvatarURL())
		.setDescription(msgtosend)
		.setColor("GREEN")
		.setTitle("New suggestion:")
		.setFooter(`Developed by ${myTag}`, myAvatar);
        
		var Sentembed = await message.guild.channels.cache.get("856795318069886976").send(embed)

        Sentembed.react('✅').then(() => Sentembed.react('❌'));

		message.delete().catch(error =>{
		})
    }
}