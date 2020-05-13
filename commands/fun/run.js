const Discord = require("discord.js");

module.exports = {
    help: {
        name: 'run',
        description: "Tu veux courir ou t'enfuir ? GOOOOOO !",
        category: 'fun',
        usage: 'r!run',
    },
    run: (client, msg, args) => {

        var run = [
            "https://media.giphy.com/media/Hx21Htt6JXSG4/giphy.gif",
            "https://media.giphy.com/media/l0NwF1dnk7GRz3pK0/giphy.gif",
            "https://media.giphy.com/media/l0HlUIl8snxmgscE0/giphy.gif",
            "https://media.giphy.com/media/3o7ZeLr01g0kAk4K6Q/giphy.gif",
            "https://media.giphy.com/media/tuP0XC2h8aEZa/giphy.gif",
            "https://media.giphy.com/media/l0K42fEl2ldQOrNba/giphy.gif",
            "https://media.giphy.com/media/2y77qqREIzrQk/giphy.gif",
        ]

        rv = Math.floor(Math.random() * run.length)

        let runEmbed = new Discord.MessageEmbed()
                .setDescription(`${msg.author} s'enfuit !`)
                .setImage(run[rv])
                .setFooter(`Fait par ${client.user.username}`, client.user.avatarURL)
            msg.channel.send(runEmbed)
    }
}