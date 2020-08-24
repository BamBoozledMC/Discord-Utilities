const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'userinfo',
	description: '',
	usage: '',
	aliases: ['usrinfo', 'userinf', 'usrinf'],
	async execute(bot, message, args) {
    if (message.author.id != config.ownerID) return;
let inline = true
    let resence = true
    const status = {
        online: " Online",
        idle: " Idle",
        dnd: " Do Not Disturb",
        offline: "<:offilne:424890400319340546> Offline/Invisible"
      }
        
      if (args[0]) {
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

              }  else return message.channel.send(`t`);
          }  else return message.channel.send(`t`);

      } else return message.channel.send(`e`);
          
      if (!member) return message.channel.send(`Couldn't find the user! Please make sure you supply a mention or userID.`);
      else member = message.guild.members.cache.get(member.id);
      if (!member) return message.channel.send(`q`);
  if (!member) {
      return message.reply('Make sure to mention a user!');
  }
  if (member.user.bot === true) {
    srvbot = "True";
  } else {
    srvbot = "False";
  }

  let embed1 = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((member.displayAvatarURL))
                .setColor("AQUA")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.id, inline)
                .addField("Nickname", `${member.nickname != null ? `Nickname: ${member.nickname}` : "None"}`, true)
                .addField("Bot", `${srvbot}`,inline, true)
                .addField("Status", `${status[member.presence.status]}`, inline, true)
                .addField("Playing", `${member.presence.game ? `🎮 ${member.user.presence.game.name}` : "Not playing"}`,inline, true)
                .addField("Roles", `${message.member.roles}`, true)
                .addField("Joined Discord At", member.joinedAt)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed1);
}
let embed2 = new Discord.MessageEmbed()
  //.setAuthor(member.user.username)
  .setThumbnail((message.author.displayAvatarURL))
  .setColor("AQUA")
  .addField("Full Username", `${message.author.tag}`, inline)
  .addField("ID", message.author.id, inline)
  .addField("Nickname", `${message.author.nickname != null ? `Nickname: ${message.author.nickname}` : "None"}`, true)
  .addField("Bot", `False`,inline, true)
  .addField("Status", `${status[message.author.presence.status]}`, inline, true)
  .addField("Playing", `${message.author.presence.game ? `🎮 ${member.presence.game.name}` : "Not playing"}`,inline, true)
  .addField("Roles", `${message.member.roles}`, true)
  .addField("Joined Discord At", `${message.member.joinedAt}`)
  .setFooter(`Information about ${message.author.username}`)
  .setTimestamp()

message.channel.send(embed2);

            message.delete();
        }
    }