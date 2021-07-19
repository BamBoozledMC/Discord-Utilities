const config = require('../config.json');
const Discord = require ("discord.js");
const beautify = require("beautify");

module.exports = {
	name: 'restart',
    descrption: 'restarts bot',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, myUsername, myTag, myAvatar) {
    if (message.author.id != config.ownerID) return message.channel.send("No can do sir")
    try {
        message.channel.send(`<a:loading:735109207547707523> Attempting a restart...\n[<@${config.ownerID}>]`).then(message => {
          //msg.react('🆗');
          console.log(`Attempting a restart...`)
          setTimeout(function(){
            message.edit(`<a:completed:735703067605073951> Successfully Restarted!\n[<@${config.ownerID}>]`);
             console.log(`Successfully restarted!`)
             message.delete({timeout:5000})
          }, 10000)
        })
        .then(bot.destroy())
        .then(bot.login(config.token))
        message.delete().catch(error =>{
		})




          } catch(e) {
            message.channel.send(`ERROR: ${e}`)

    }
}
}