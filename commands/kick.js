const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'kick',
    descrption: 'kicks mentioned user from the server',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix) {
    
    if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: I do not have enough permissions to do this!\nPlease make sure i have the \"KICK_MEMBERS\" permission.")
        let xdemb = new Discord.MessageEmbed()
  .setColor("AQUA")
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", `${prefix}kick <@user | userID> [reason]`, true)
  .addField("Example:" ,`${prefix}kick @BamBoozled spam`)
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

      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");

    
      let reason = args.slice(1).join(" ");
    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
    
  member.send(`You have been kicked from **${message.guild.name}** for the reason: **${res}**`)
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      let kick = new Discord.MessageEmbed()
      .setColor("AQUA")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete()
    }
}