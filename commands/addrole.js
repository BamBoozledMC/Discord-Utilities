const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'addrole',
    descrption: 'DMs mentioned user with your message',
    aliases: ['ar', 'addr', 'roleadd'],
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix) {
		// if(message.author.id != config.resID) return;
		//if(message.author.id != config.ownerID) if(message.author.id != config.resID) return;

        if (!message.member.hasPermission("MANAGE_ROLES") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: I do not have enough permissions to do this!\nPlease make sure i have the \"MANAGE_ROLES\" permission.")
		let xdemb = new Discord.MessageEmbed()
	  		.setColor("AQUA")
	  		.setTitle("AddRole Command")
			.addField("Description:", `Adds a role to a user`, true)
	 		.addField("Usage:", `${prefix}addrole <@user | userID> <@role>`, true)
	 		.addField("Example:" ,`${prefix}addrole @BamBoozled @Moderator`)
			.setFooter(`Developed by ${config.myTag}`, config.myAvatar)
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
			

  let role = args[1]
  console.log(args[1])
  console.log(args[2])
  console.log(args[3])
  console.log(args[4])
  console.log(role)
  if(!role) return message.channel.send(xdemb);
  let gRole = message.guild.roles.cache.get(role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(member.roles.cache.has(gRole.id)) return message.channel.send("This user already have that role.");
  await(member.roles.add(gRole.id));

    await message.channel.send(`***I just gave ${member.user.username} the ${gRole.name} role!***`)

    message.delete();
			
    }
}