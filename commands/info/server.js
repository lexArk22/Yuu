const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
    name: 'server',
    description: 'Donne des infos du serveur.',
    usage: 'y!server',
    accessible: 'Membre',
    category: 'info',
    },
     run: (client, msg, args) => {
         const embed = new MessageEmbed()
         .setColor('BLACK')
         .setTitle("`Informations du serveur:`")
         .setThumbnail(msg.guild.iconURL())
         .addField("`Nom du serveur:`", `${msg.guild.name}`)
         .addField("`Propriétaire:`", `${msg.guild.owner}`)
         .addField("`Nombre d'utilisateur(s):`", `${msg.guild.memberCount}`)
         .addField("Nombres de Rôles:", `${msg.guild.roleCount}`)
         .setFooter("Yuu Otasoka.");
    msg.channel.send(embed)
}}