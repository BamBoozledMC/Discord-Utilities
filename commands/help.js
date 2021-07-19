const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'help',
    descrption: 'Help Page',
	usage: '',
	args: false,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
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
		try {
		await message.author.send(embed)
		message.lineReply(`Check your DMs!`).catch(error =>{
		})
	} catch(e){
		message.reply(`:x: An Error occurred whilst messaging you! Please make sure your DMs are open so I can message you.`)
	}
    }
}