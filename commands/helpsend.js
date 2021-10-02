const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'helpsend',
    descrption: 'Help Page',
	usage: '',
	aliases: ['sendhelp'],
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
		if (message.author.id != config.ownerID) return;
        let embed = new Discord.MessageEmbed()
		.setTitle('Help Page')

		.addField("Fun", `\`${prefix}msgme\` DMs you with "Hi!"
		\`${prefix}snipe\` Snipes the last deleted message in your channel!
		\`${prefix}meme\` Sends a random meme!
		\`${prefix}cat\` Sends some cats!
		\`${prefix}shut\` Tells your friends to **SHUT**!
		\`${prefix}smh\` Sends **smh**.
		\`${prefix}shut\` Tells your friends to **SHUT**!
		\`${prefix}smh\` Sends **smh**.
		\`${prefix}nito\` Sends some free nito!
		\`${prefix}avatar [@user]\` Sends mentioned user's avatar (pfp).
		\`${prefix}random\` Chooses a random number from 1-10.
		\`${prefix}bubblewrap\` Sends some bubblewrap!
		\`${prefix}soundboard <soundeffectname>\` Plays a sound effect in VC!`)

		.addField("Configuration", `\`${prefix}prefix\` Change the server's prefix`)

		.addField("Moderation", `\`${prefix}clear <amount>\` Deletes given amount of messages. (Limited to 100 due to discord)
		\`${prefix}slowmode <time>\` Sets the channel's slowmode to the provided time.
		\`${prefix}warn <@user | userID> [reason]\` Warns the provided user for your reason.
		\`${prefix}kick <@user | userID> [reason]\` Kicks the provided user from the server.
		\`${prefix}ban <@user | userID> [reason]\` Bans the provided user from the server.
		\`${prefix}unban <userID> [reason]\` Unbans the provided user from the server.
		\`${prefix}mute <@user | userID> [reason]\` Mutes the provided user indefinitely.
		\`${prefix}tempmute <@user | userID> <time> [reason]\` Tempmutes the provided user for the specified time.
		\`${prefix}unmute <@user | userID> [reason]\` unmutes the provided user.`)

		.addField("Misc", `\`${prefix}ping\` Checks the bot's ping.
		\`${prefix}uptime\` Checks the bot's uptime.
		\`${prefix}say <message>\` Returns your message.
		\`${prefix}invite <args>\` Sends a link to either join the support server, or invite me to your server!
		\`${prefix}serverinfo\` Displays info about the current server.`)

		.setDescription(`Here you can find info on every command!\n${message.guild.name}'s Current prefix is \`${prefix}\`\nUse ${prefix}prefix reset to reset your server's prefix to default.\n\n[] = Optional **|** <> = Required\n`)
		.setThumbnail('https://cdn.discordapp.com/attachments/725983043520692256/725983097685934090/U_Blue_image.png')
		.setFooter(`Developed by ${myTag}`, myAvatar)
		.setColor('AQUA')


		let xdemb = new Discord.MessageEmbed()
	  		.setColor("AQUA")
	  		.setTitle("Invalid User")
				.setDescription("User not found or was not specified")
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
            await member.send(embed);
						await member.send(`:bangbang: You received this message because the owner of this bot, **${myTag}** :bangbang:\n*If you have any questions Contact **${myTag}***`)
			message.channel.send(`:thumbsup: I've sent help to **${member.user.username}**!`)
			.then(message => {
				message.delete({timeout:6000})
			});
		} catch(e){
			console.log(e)
			message.reply(`:x: An Error occurred whilst messaging that user!\nAre their DMs closed? Did they block me?`)
		}

    }
}
