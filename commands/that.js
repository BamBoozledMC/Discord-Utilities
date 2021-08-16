const config = require('../config.json');
const Discord = require ("discord.js");

module.exports = {
	name: 'that',
    descrption: 'Returns your message',
	usage: '<message>',
	args: true,
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        try {
        var suppliedID = args[0]
        var suppliedChannel = args[1]
        var channelID = message.channel.id
        if (!suppliedID) {
            message.react("740124117004582992").catch(error =>{
            })
       } else {
           if (!suppliedChannel) {
            message.channel.messages.fetch(suppliedID).then(message => {
                message.react("740124117004582992").catch(error =>{
                    })
            })
            } else {
            bot.channels.fetch(suppliedChannel).then(channel => {
            channel.messages.fetch(suppliedID).then(message => {
                message.react("740124117004582992").catch(error =>{
                })
            })
        })
            }
    }
    } catch(e) {
        message.channel.send(`Error ${e}`)
    }
    }
}
