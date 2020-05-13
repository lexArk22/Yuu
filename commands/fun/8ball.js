const Discord = require('discord.js');

module.exports = {
    help: {
        name: '8ball',
        description: '//',
        category: 'fun',
        usage: 'y!8ball'
    },
    run: (client, msg, args) => {

        var roll = [
            "Peut-être",
            "Oui",
            "Non",
            "Je ne sais pas",
        ]

        rl = Math.floor(Math.random() * roll.length)

        msg.channel.send(`${msg.author} ` + roll[rl])
    }
}