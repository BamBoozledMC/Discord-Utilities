const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'unban',
    descrption: 'unbans mentioned user from the server',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
    try{
if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id != config.ownerID) return message.channel.send("Sorry, you don't have permissions to use this!");

let xdemb = new Discord.MessageEmbed()
.setColor("AQUA")
.setTitle("Unban Command")
.addField("Description:", `Unban a member`, true)
.addField("Usage:", `${prefix}unban <userID> [reason]`, true)
.addField("Example:" ,`${prefix}unban 562382703190867972 because he shouldn't be banned`)
.setFooter(`Developed by ${myTag}`, myAvatar)

        if (!args[0]) return message.channel.send(xdemb)
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
        if (isNaN(args[0])) return message.channel.send(xdemb)
        if (!bannedMember) return message.channel.send("Couldn't find the user!\nUser not banned?\nPlease provide a valid user ID")

        let reason = args.slice(1).join(" ")

        if(!reason) {
            res = "No reason given";
          }
          else {
            res = `${reason}`
          }

            await message.guild.members.unban(bannedMember.user.id, reason)
                let bean = new Discord.MessageEmbed()
		  .setColor("AQUA")
		  .setTitle(`Unban | ${bannedMember.user.tag}`)
		  .addField("User", `<@${bannedMember.user.id}>`, true)
		  .addField("Moderator", message.author, true)
		  .addField("Reason", res)
		  .setTimestamp()
          .setFooter(bannedMember.user.id)
          message.channel.send(bean)
          message.delete()
    }catch(e){
      console.log(e.stack);
      if(!message.guild.me.hasPermission("BAN_MEMBERS" || "MANAGE_MESSAGES")) return message.channel.send(`:x: I do not have enough permissions to do this!\nPlease make sure i have the "BAN_MEMBERS" and "MANAGE_MESSAGES"  permissions.`)
    }
            
    }
}