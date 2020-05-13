const Discord = require("discord.js");
const Client = new Discord.Client();

module.exports = {
    help: {
        name: 'hug',
        description: "Tu veux faire un câlin à quelqu'un ? Vas'y !",
        usage: 'r!hug',
        category: 'fun'
    },
    run: (client, msg, args) => {

        var hug = [
            "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
            "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
            "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
            "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
            "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
            "https://media.giphy.com/media/V5eTLJCJ1kig8/giphy.gif",
            "https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif",
        ]

        rh = Math.floor(Math.random() * hug.length);

        if (!msg.mentions.users.size) {
            return  msg.reply("Vous devez mentionner un utilisateur !");
        }

        if(msg.mentions.users.first()){
            let hugEmbed = new Discord.MessageEmbed()
                .setDescription(`${msg.author} t'a fait un câlin ${msg.mentions.users.first()} ! 🥰`)
                .setImage(hug[rh])
                .setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
            msg.channel.send(hugEmbed)
         } 
    }
}