const config = require('../config.json');
const {Discord, MessageAttachment} = require ("discord.js");
const talkedRecently = new Set();

module.exports = {
	name: 'random',
    descrption: 'gives you a random number from 1-10',
    aliases: ["rando", "rnumber", "rn"],
	usage: '<message>',
	args: true,
	async execute(bot, message, args) {
        const rando_number = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10'
        ]
        const num = rando_number[Math.floor(Math.random() * rando_number.length)]
        message.reply(`Your random number is: **${num}**`).catch(error =>{
			message.author.send(":x: I dont have permissions to send messages in that channel!").catch(error =>{
			})
		})
    }
}