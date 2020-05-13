const Discord = require("discord.js");

module.exports = {
    help: {
        name: 'uptime',
        description: "Sert à voir depuis quand le bot est connecté.",
        category: 'info'
    },
    run: async(client, msg, args) => {
        function duration(ms) {
            const secondes = Math.floor((ms / 1000) % 60).toString()
            const minutes = Math.floor((ms / (1000 * 60)) % 60).toString()
            const heures = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const jours = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${jours.padStart(1, '0')} jours, ${heures.padStart(2, '0')} heures, ${minutes.padStart(2, '0')} minutes, ${secondes.padStart(2, '0')} secondes, `
        }
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle("Je suis en ligne depuis:")
        .setDescription(`${duration(client.uptime)}`)
        .setTimestamp()
        .setFooter("Yuu Otasoka.")
        msg.channel.send(embed)
        }
}