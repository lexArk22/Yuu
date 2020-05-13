const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	help: {
		name: 'cry',
		description: "Si tu veux pleurer, utilises cette commande !",
		usage: "r!kiss",
		category: 'fun',
	},
	run: (client, msg, args) => {
		var cry = [
			"https://media.giphy.com/media/Xqlsn2kLPBquI/giphy.gif",
			"https://media.giphy.com/media/Xqlsn2kLPBquI/giphy.gif",
			"https://media.giphy.com/media/48iBNy8rxN8fm/giphy.gif",
			"https://media.giphy.com/media/eQwUWigNyGnks/giphy.gif",
			"https://media.giphy.com/media/LVZURY8imFufe/giphy.gif",
			"https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif",
			"https://media.giphy.com/media/Qq4CrROadHrGM/giphy.gif",
			"https://media.giphy.com/media/3s1B6FF1EjvFe/giphy.gif",
			"https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
		]

		rc = Math.floor(Math.random() * cry.length)


		const cryEmbed = new Discord.MessageEmbed()
		.setDescription(`${msg.author} pleure ! 🥺`)
		.setImage(cry[rc])
		.setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
		msg.channel.send(cryEmbed)
}}