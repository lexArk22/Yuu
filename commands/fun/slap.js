const Discord = require("discord.js");
const client = new Discord.Client()

module.exports = {
    help: {
        name: 'slap',
        description: "Si tu veux frapper quelqu'un, utilises cette commande !",
        usage: 'r!slap',
        category: 'fun',
    },
    run: (client, msg, args) => {
         
        var slap = [
            "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
            "https://media.giphy.com/media/RrLbvyvatbi36/giphy.gif",
            "https://media.giphy.com/media/lX03hULhgCYQ8/giphy.gif",
            "https://media.giphy.com/media/jEYH3RJVXK8Ba/giphy.gif",
            "https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif",
            "https://media.giphy.com/media/3vDS40HZxJwFGTbXoI/giphy.gif",
        ]

        rs = Math.floor(Math.random() * slap.length)

        if (!msg.mentions.users.size) {
            return  msg.reply("Vous devez mentionner un utilisateur !");
        }

        if(msg.mentions.users.first()){
            let gifembed = new Discord.MessageEmbed()
                .setDescription(`${msg.author} t'a frappé ${msg.mentions.users.first()} ! Qu'est-ce que tu as encore fais ? `)
                .setImage(slap[rs])
                .setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
            msg.channel.send(gifembed);
            } 
    } 
}