const Discord = require("discord.js");
const client = new Discord.Client()
module.exports = {
    help: {
        name: 'kiss',
        description: "Si tu veux embrasser une personne du serveur, baah, utilises cette commande !",
        usage: 'r!kiss',
        accessible: 'membre',
        category: 'fun'
    },
    run: (client, msg, args) => {
        var kiss = [
            "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
            "https://media.giphy.com/media/ZL0G3c9BDX9ja/giphy.gif",
            "https://media.giphy.com/media/MkYnKdrCrk4KY/giphy.gif",
            "https://media.giphy.com/media/QweWddrIQxlfi/giphy.gif",
            "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
            "https://media.giphy.com/media/Gj8bn4pgTocog/giphy.gif",
        ]

        var phrases = [
            "Qu'est-ce qu'ils sont mignons !"
        ]

        pa = Math.floor(Math.random() * phrases.length);
        rg = Math.floor(Math.random() * kiss.length);

        if (!msg.mentions.users.size) {
            return  msg.reply("Vous devez mentionner un utilisateur !");
        }

        if(msg.mentions.users.first()){
            let gifembed = new Discord.MessageEmbed()
                .setDescription(`${msg.author} t'as embrassé  ${msg.mentions.users.first()} ` + phrases[pa] + ":heart_eyes:")
                .setImage(kiss[rg])
                .setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
            msg.channel.send(gifembed);
            } 
    }
}