const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
    name: "user",
    category: 'info',

    description: "Info d'un utilisateur.",
    timeout: 10000,
    },
    run: async (client, message, args) => {
        const sEmbed = new MessageEmbed()
        .setColor('BLACK')
        .setTitle("`Voici vos informations:`")
        .setThumbnail(message.author.displayAvatarURL())
        .addField("`Ton pseudo:`", `${message.author.username}`)
        .addField("`Ton id:`", `${message.author.id}`)
        .addField("`Discriminator:`", `${message.author.discriminator}`)
        .addField("`Tu joues à:`", `${message.author.presence.status}`)
        .addField("`Tu as rejoins le:`", `${message.author.createdAt}`)
        message.channel.send(sEmbed)
    }    
}