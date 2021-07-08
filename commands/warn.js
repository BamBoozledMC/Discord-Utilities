const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'warn',
    descrption: 'warns mentioned user for the provided reason',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix) {
    if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");
  let reason = args.slice(1).join(' ');
  let xdemb = new Discord.MessageEmbed()
  .setColor("AQUA")
  .setTitle("Warn Command")
  .addField("Description:", `Warn a member`, true)
  .addField("Usage:", `${prefix}warn <@user | userID> [reason]`, true)
  .addField("Example:" ,`${prefix}warn @BamBoozled spam`)
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
  if (!reason) return message.channel.send('Please provide a reason for warning the user.');

  member.send(`You have been warned in **${message.guild.name}** for the reason: **${reason}**`);

  message.delete();
  
  let warn = new Discord.MessageEmbed()
  .setColor("AQUA")
  .setTitle(`Warn | ${member.user.tag}`)
  .addField("User", member, true)
  .addField("Moderator", message.author, true)
  .addField("Reason", reason)
  .setTimestamp()
  .setFooter(member.id)

  message.channel.send(warn)

}
}