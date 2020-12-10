const Discord = require ("discord.js");

module.exports = {
    name: 'msgme',
    descrption: 'DMs you with "Hi!"',
    execute(bot, message, args){
        message.author.send('Hi!')
		message.delete().catch(error =>{
        })
    }
}