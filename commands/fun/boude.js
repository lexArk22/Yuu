const Discord = require("discord.js");

module.exports = {
    help: {
        name: 'boude',
        description: "Tu veux bouder ? Vas'y !",
        usage: 'r!boude',
        category: 'fun',
    },
    run: (client, msg, args) => {

        var boude = [
            "https://media.giphy.com/media/AjzW0QHSMiIk8/giphy.gif",
            "https://media.tenor.com/images/14545c658cf45a960070b343922a47d6/tenor.gif",
            "https://gifimage.net/wp-content/uploads/2018/10/anime-gif-sulk-5.gif",
            "https://gifimage.net/wp-content/uploads/2018/10/anime-gif-sulk-3.gif",
            "https://media1.tenor.com/images/4532ae141bc2de47271e57de0161d2ad/tenor.gif",
            "https://gifimage.net/wp-content/uploads/2018/10/anime-gif-sulk-2.gif",
            "https://media1.tenor.com/images/b7e132fd3f4e110ea54ef8aa8f4eebbe/tenor.gif",
            "https://i.pinimg.com/originals/9e/29/61/9e29614354a9b8c224b130e9332490b3.gif",
        ]

        rb = Math.floor(Math.random() * boude.length)

        let boudeEmbed = new Discord.MessageEmbed()
                .setDescription(`${msg.author} boude ! 🥺`)
                .setImage(boude[rb])
                .setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
            msg.channel.send(boudeEmbed)
    }
}