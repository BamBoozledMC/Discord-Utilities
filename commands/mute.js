const Discord = require ("discord.js");
const ms = require("ms");
const config = require('../config.json');

module.exports = {
	name: 'mute',
  descrption: 'Mutes mentioned user in the server',
	usage: '',
	args: false,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
    //!mute @user 1s/m/h/d
  try {
  if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
  let xdemb = new Discord.MessageEmbed()
  .setColor("AQUA")
  .setTitle("Mute Command")
  .addField("Description:", `Mute a member`, true)
  .addField("Usage:", `${prefix}mute <@user | userID> [reason]`, true)
  .addField("Example:" ,`${prefix}mute @BamBoozled advertising`)
  .setFooter(`Developed by ${myTag}`, myAvatar)
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
  if (member.id === message.author.id) return message.channel.send("You cannot mute yourself!");
  if(member.hasPermission("ADMINISTRATOR")) return message.channel.send("I cant mute this user");
  let muterole = message.guild.roles.cache.find(r => r.name === "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        data: {
        name: "Muted",
        color: "#777777",
        permissions: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
        }
      });
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          CONNECT: false,
          SPEAK: false

        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  if(member.roles.cache.has(muterole.id)) return message.channel.send("This user is already muted!");

  let reason = args.slice(1).join(" ");
		if(!reason) {
		  res = "No reason given";
		}
		else {
		  res = `${reason}`
		}

    try {
  await(member.roles.add(muterole.id));
    } catch(e) {
      return message.channel.send(`:x: I do not have enough permissions to do this!\nPlease make sure the "Discord Utilities" role is higher than the "Muted" role!`)
    }
  let muteembed = new Discord.MessageEmbed()
		  .setColor("AQUA")
		  .setTitle(`Mute | ${member.user.tag}`)
		  .addField("User", member, true)
      .addField("Moderator", message.author, true)
		  .addField("Reason", res)
		  .setTimestamp()
		  .setFooter(member.id)
  message.channel.send(muteembed);
  try {
  member.send(`You have been muted in **${message.guild.name}** for the reason: **${res}**`)
}catch(e){
  console.log(e.stack);
}

  message.delete();
      }catch(e){
        console.log(e.stack);
        if(!message.guild.me.hasPermission("MANAGE_ROLES" || "MANAGE_MESSAGES")) return message.channel.send(":x: I do not have enough permissions to do this!\nPlease make sure i have the \"MANAGE_ROLES\" and \"MANAGE_MESSAGES\" permissions.")
        }
    }
}