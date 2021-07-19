const Discord = require ("discord.js");
const talkedRecently = new Set();
const config = require('../config.json');

module.exports = {
	name: 'playlink',
    description: 'Checks the bot\'s ping',
    aliases: ['pl',],
	usage: '!ping',
	args: false,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        if (message.author.id != config.ownerID) {
        if (talkedRecently.has(message.author.id)) {
            return message.reply("Please wait 10 seconds before using this command again!")
            .then(message => {
                message.delete({timeout:3000})
            });
        }
        }

        let input;
    if(args[0]) input = args[0].toLowerCase();
    else input = args[0];
    if (input == "stop") {


        if (message.member.voice.channel) {
            message.guild.me.voice.channel.leave();
            
          } else {
            message.delete().catch(error =>{
            })
            message.reply('Join a channel and try again')
            .then(message => {
            message.delete({timeout:3000});
            }); 
          }} 
        else if (!input) {
            return;
        } else {
            if (message.guild.me.voice.channel && message.author.id != config.ownerID) {
                return message.channel.send("Another user is already using me! Please try again soon.")
            }
            if (message.member.voice.channel) {
                message.delete().catch(error =>{
                })
                talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
                const connection = await message.member.voice.channel.join();
                console.log(input)
            const dispatcher = connection.play(input)
                message.channel.send(`🔊 Playing <${input}> in your voice channel\nDeveloped by ${myTag}`).catch(error =>{
                })
                dispatcher.on('finish', () => {
                    message.guild.me.voice.channel.leave();
                  });
                
              } else {
                message.delete().catch(error =>{
                })
                message.reply('Join a channel and try again')
                .then(message => {
                message.delete({timeout:3000});
                }); 
              }

        }


    }
}
