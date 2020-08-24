const config = require('./config.json');
const Discord = require ("discord.js");
const bot = new Discord.Client ({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const db = require('quick.db');

const fs = require('fs');
bot.commands = new Discord.Collection();
//bot.aliases = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
	//command.aliases.array.forEach(alias => {
	//	bot.aliases.set(alias, command.name)		
	//});
}

console.log(`Loading ${commandFiles.length} commands...`)

commandFiles.forEach((f, i) => {
	console.log(`Successfully loaded ${i + 1}: ${f}!`)
})

bot.on("ready", async () => {
	bot.guilds.cache.forEach( guild => {
		guild.members.cache.forEach( member => {
			let mutetime = db.get(`tempmute.${guild.id}.${member.user.id}.time`);
			if(isNaN(mutetime)) return;
			let channel = guild.channels.cache.get(db.get(`tempmute.${guild.id}.${member.user.id}.channel`));
			let timer = setInterval(async function() {
				mutetime = mutetime - 1;
				if(mutetime == 0) { 
					clearInterval(timer);

					let unmuteembed = new Discord.MessageEmbed()
    				.setColor("AQUA")
		  			.setTitle(`Unmute | ${member.user.tag}`)
		  			.addField("User", member, true)
     				.addField("Moderator", bot.user, true)
		  			.addField("Reason", "Auto Unmute")
		  			.setTimestamp()
					.setFooter(member.id)
					let muterole = guild.roles.cache.find(r => r.name === "Muted")  
					member.roles.remove(muterole.id);
					db.delete(`tempmute.${guild.id}.${member.user.id}.time`);
					db.delete(`tempmute.${guild.id}.${member.user.id}.channel`);
    				try {
    				member.send(`You have been unmuted in **${guild.name}** | Auto Unmute`)
 					}catch(e){
    				console.log(e.stack);
					  }
					  channel.send(unmuteembed);

				}
			}, 1000)
		});
	});
console.log(" ____  _                       _   _   _ _   _ _ _ _   _           ")
console.log("|  _ \\(_)___  ___ ___  _ __ __| | | | | | |_(_) (_) |_(_) ___  ___ ")
console.log("| | | | / __|/ __/ _ \\| '__/ _` | | | | | __| | | | __| |/ _ \\/ __|")
console.log("| |_| | \\__ \\ (_| (_) | | | (_| | | |_| | |_| | | | |_| |  __/\\__ \\")
console.log("|____/|_|___/\\___\\___/|_|  \\__,_|  \\___/ \\__|_|_|_|\\__|_|\\___||___/")
console.log(" ")
console.log("Loaded all commands. Bot is ready to use!")
console.log(`Watching ${bot.guilds.cache.size} Servers and ${bot.users.cache.size} Users!`)	
	
let i = 0;
let activities;
setInterval(() => {
    activities = [ `${config.prefix}help`, `${bot.guilds.cache.size} servers!`, `${bot.users.cache.size} users!` ];
    bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING"});
}, 16000)

});
bot.on('message', async message => {
	if (message.channel.type == "dm") return;
	let pref = message.guild && db.get(`prefix.${message.guild.id}`)
	let prefix;

	if (!pref) {
		prefix = `${config.prefix}`;
	} else {
		prefix = pref;
	}

	const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>|${escapeRegex(prefix)})\\s*`);
if(!prefixRegex.test(message.content)) return;
const [, matchedPrefix] = message.content.match(prefixRegex);
	if (message.author.bot) return;

	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	let mentionembed = new Discord.MessageEmbed()
	.setColor("AQUA")
	.setTitle("Discord Utilities")
	.setThumbnail('https://cdn.discordapp.com/attachments/725983043520692256/725983097685934090/U_Blue_image.png')
	.setDescription(`Hey there! My prefix for **${message.guild.name}** is \`${prefix}\`\nFor a list of commands just type \`${prefix}help\``)
	
	if(!commandName && !message.content.startsWith(prefix)) return message.channel.send(mentionembed);

	if(commandName == "prefix") {
		if (!message.member.hasPermission("MANAGE_GUILD") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
		let data = db.get(`prefix.${message.guild.id}`);
		if (args[0] === "reset") {
			await db.delete(`prefix.${message.guild.id}`);
			return message.channel.send(`The server prefix for **${message.guild.name}** has been reset!`);
			console.log(`Prefix for ${message.guild.name} was reset.`)
		}
		let symbol = args[0];
		let nonedefined = new Discord.MessageEmbed()
		.setTitle("Server Prefix")
		.setDescription(`${message.guild.name}'s Current prefix is \`${prefix}\`\nUse ${prefix}prefix reset to reset your server's prefix to default.`)
		.addField("Description:", "Change the server's prefix", true)
		.addField("Usage:", `${prefix}prefix [Your_custom_prefix_here]\n${prefix}prefix reset`, true)
		.addField("Example:", `${prefix}prefix -`)
		.setColor('AQUA')
		if (!symbol) return message.channel.send(nonedefined)

		db.set(`prefix.${message.guild.id}`, symbol);
		return message.channel.send(`The server prefix for **${message.guild.name}** has been updated to: \`${symbol}\``).then; console.log(`The prefix for ${message.guild.name} was updated to: ${symbol}`)
	}


	const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (message.channel.type == "dm") return;
	try {
		if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(":x: I do not have permission to send messages in this channel!\nPlease make sure i have the \"SEND_MESSAGES\" permission in the channel overrides/permissions")
		command.execute(bot, message, args, prefix);
	} catch (error) {
		console.error(error);
		message.author.send(`:x: There was an error trying to execute that command. \`${error}\`\n For more help please contact NightCrafter1#0882`);
	}


	


});


bot.on('guildMemberAdd', member => {
	if(member.guild.id != "720400697304285227") return;
	let welcomeChannel = member.guild.channels.cache.get('720987338435723315')
	welcomeChannel.send(`Welcome to **${member.guild.name}** ${member}!`); 

	let welcomeLog = member.guild.channels.cache.get('721103675933589544')
	let welcomelogembed = new Discord.MessageEmbed()
	.setTitle('User Joined')
	.addField("User:", `${member.user.tag}`)
	.setFooter(new Date)
	.setColor('GREEN')
	welcomeLog.send(welcomelogembed)

	member.roles.add("720971855292530709");
});

bot.on('guildMemberRemove', member => {
	if(member.guild.id != "720400697304285227") return;
	let leaveChannel = member.guild.channels.cache.get('720987338435723315')
	leaveChannel.send(`${member.user.tag} has left us :(`);
	
	let leaveLog = member.guild.channels.cache.get('721103675933589544')
	let leavelogembed = new Discord.MessageEmbed()
	.setTitle('User Left')
	.addField("User:", `${member.user.tag}`)
	.addField('Joined At:', `${member.joinedAt}`)
	.setFooter(new Date)
	.setColor('RED')
	leaveLog.send(leavelogembed)
});

bot.on("guildCreate", async guild => {
    console.log(' ')
    console.log(`I was added to a server! ${guild.name} (id: ${guild.id}).`)
    console.log(`I am now in ${bot.guilds.cache.size} servers.`)
	console.log(' ')
	let guildjoined = new Discord.MessageEmbed()
	.setTitle("I was added to a server!")
	.addField(guild.name, `ID: ${guild.id}`)
	.addField("I am now in", `${bot.guilds.cache.size} servers.`)
	.setColor('GREEN')
	.setTimestamp()
	bot.users.cache.get(config.ownerID).send(guildjoined)
});

bot.on("guildDelete", async guild => {
    console.log(' ')
    console.log(`I was removed from a server :c ${guild.name} (id: ${guild.id})`)
    console.log(`I am now in ${bot.guilds.cache.size} servers.`)
	console.log(' ')
	let guildremoved = new Discord.MessageEmbed()
	.setTitle("I was removed from a server :c")
	.addField(guild.name, `ID: ${guild.id}`)
	.addField("I am now in", `${bot.guilds.cache.size} servers.`)
	.setColor('RED')
	.setTimestamp()
	bot.users.cache.get(config.ownerID).send(guildremoved)
});
	
	

bot.login(config.token)
