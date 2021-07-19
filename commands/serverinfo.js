const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'serverinfo',
	description: '',
	usage: '',
	aliases: ['srvinfo', 'serverinf', 'srvinf'],
	async execute(bot, message, args, myUsername, myTag, myAvatar) {
const verlvl = {
    NONE: "None",
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "(╯°□°）╯︵ ┻━┻",
    VERY_HIGH: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL({dynamic: true});
    let serverembed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Name", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Owner", message.guild.owner, inline)
    .addField("Region", message.guild.region, inline)
    .addField("Verification Level", verlvl[message.guild.verificationLevel], inline)
    .addField("Members", `${message.guild.memberCount}`, inline)
    .addField("Roles", message.guild.roles.cache.size, inline)
    .addField("Channels", message.guild.channels.cache.size, inline)
    .addField("You Joined", message.member.joinedAt)
    .setFooter(`Created ${message.guild.createdAt}\nDeveloped by ${myTag}`, myAvatar);

    message.channel.send(serverembed).catch(error =>{
			message.author.send(":x: I dont have permissions to send messages in that channel!").catch(error =>{
			})
		});

}
}
