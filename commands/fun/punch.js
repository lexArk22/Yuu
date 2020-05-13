const Discord = require("discord.js");
const client = new Discord.Client()

module.exports = {
    help: {
        name: 'punch',
        description: "Si tu veux donner un coup de poings à quelqu'un, utilises cette commande !",
        usage: 'r!punch',
        category: 'fun'
    },
    run: (client, msg, args) => {

        var punch = [
            "https://media.giphy.com/media/DuVRadBbaX6A8/giphy.gif",
            "https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
            "https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif",
            "https://media.tenor.com/images/1175cdf430e96e475d39777bced6798d/tenor.gif",
            "https://i.gifer.com/9eUJ.gif",
        ]

        rg = Math.floor(Math.random() * punch.length);

        if (!msg.mentions.users.size) {
            return  msg.reply("Vous devez mentionner un utilisateur !");
        }

        if(msg.mentions.users.first()){
            let punchEmbed = new Discord.MessageEmbed()
                .setDescription(`${msg.author} t'a donné un coup de poing  ${msg.mentions.users.first()} !`)
                .setImage(punch[rg])
                .setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
            msg.channel.send(punchEmbed)
         } 
    }
}