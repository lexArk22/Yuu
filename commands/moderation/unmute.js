const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
        name: 'unmute',
        category: 'moderation',
    },
    run: async(client, message, args) => {
        
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("> Vous n'avez pas les permissions requises pour utiliser cette commande.")

        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("> Je n'ai pas les permissions requises pour utiliser cette commande.")

        let mute = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mute) return message.channel.send("Veuillez mentionner un utilisateur à démute.");

        let muteRole = message.guild.roles.cache.find(r => r.name === 'Mute')
      if(!muteRole) {

        mute.roles.remove(muteRole).then(() => {
            message.delete()
            mute.send(`Salut, tu as été démute sur le serveur ${message.guild.name} !`)
            message.channel.send(`${mute.user.username} a bien été démute !`)

          })}

          let embed = new MessageEmbed()
      .setColor('BLACK')
      .setTitle(`Modération: Unmute.`)
      .addField('`Unmute`', mute.user.username)
      .addField('`Modérateur:`', message.author.username)
      .addField('`Date:`', message.createdAt)

      let channel = message.guild.channels.cache.find(ch=>ch.name==="yuu")
      if(!channel)return;
      channel.send(embed)

    }
}