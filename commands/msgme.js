const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
    name: 'msgme',
    descrption: 'DMs you with "Hi!"',
    execute(bot, message, args, myUsername, myTag, myAvatar){
        message.author.send('Hi!')
		message.delete().catch(error =>{
        })
    }
}