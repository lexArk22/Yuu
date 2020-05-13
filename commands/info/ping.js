const Discord = require('discord.js')
module.exports = {
    help: {
    name: "ping",
    category: 'info',

    description: "Returns latency and API ping",
    timeout: 10000,
    },
    run: async (client, message, args) => {
         message.channel.send(`🏓 Ping....`).then(msg=>{
        const _ = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`La Latence est: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nL'API de la latence est: ${Math.round(client.ws.ping)}ms`)
        .setColor('BLACK')
        msg.edit(_);
    })
    }
}