const Discord = require ("discord.js");
const config = require('../config.json');

module.exports = {
    name: 'msgme',
    descrption: 'DMs you with "Hi!"',
	async execute(bot, message, args, prefix, myUsername, myTag, myAvatar) {
        message.author.send('Hi!')
		message.delete().catch(error =>{
        })
    }
}