const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'slowmode',
    descrption: 'DMs mentioned user with your message',
    aliases: ["sm"],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        if (!message.member.hasPermission("MANAGE_CHANNELS") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: I do not have enough permissions to do this!\nPlease make sure i have the \"MANAGE_CHANNELS\" permission.").catch(error =>{
        })
		//if(message.author.id != config.ownerID) return;
		let xdemb = new Discord.MessageEmbed()
	  		.setColor("AQUA")
	  		.setTitle("Slowmode Command")
			.addField("Description:", `Changes a channels slowmode\n(Maximum 6h) `, true)
	 		.addField("Usage:", `${prefix}slowmode <time>`, true)
            .addField("Example:" ,`${prefix}slowmode 15`)
            .setFooter(`Developed by ${myTag}`, myAvatar)
            let time = args[0]
            if(!time) return message.channel.send(xdemb)
            if(time.endsWith("s")) time = time.slice(0, -1);
            else if(time.endsWith("m")) time = time.slice(0, -1) * 60;
            else if(time.endsWith("h")) time = time.slice(0, -1) * 3600;

            if(isNaN(time) || time > 21600) return message.channel.send('Please include a valid time!')
            await message.channel.setRateLimitPerUser(time).catch(error =>{
            })
                message.channel.send(`<a:completed:735703067605073951> I successfully set the channel slowmode to \`${args[0]}\``)


    }
    }
