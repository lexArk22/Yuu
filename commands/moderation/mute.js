const { MessageEmbed } = require('discord.js');
module.exports = {
  help: {
    name: "mute",
    category: 'moderation'
  }, 
    run: async(client, msg, args) => {
      if(!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.send("Tu n'as pas les permissions requises pour utiliser cette commande.")

      if(!msg.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return msg.channel.send("Je n'ai pas les permissionns requises pour utiliser cette commande.")

      let mute = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);
      if(!mute) return msg.channel.send("Veuillez mentionner un utilisateur à mute.")

      let raison = args.slice(1).join(" ");
      if(!raison) raison = "Aucune raison donnée."

      let muteRole = msg.guild.roles.cache.find(r => r.name === 'Mute')
      if(!muteRole) {
        try {
          muteRole = await msg.guild.roles.create({
            data: {
              name: 'Mute',
              color: '#9e9090'
            }
          })
          msg.guild.channels.cache.forEach(async (channel, id) => {
            await channel.overwritePermissions([
              {
                id: muteRole,
                deny: [
                  'SEND_MESSAGES',
                  'ADD_REACTIONS',
                  'SEND_TTS_MESSAGES',
                  'ATTACH_FILES',
                  'SPEAK'
                ]}
            ])
          })
        } catch(e) {
          console.log(e.stack)
        }
      }

      mute.roles.add(muteRole).then(() => {
        msg.delete()
        mute.send(`Salut, tu as été mute sur le serveur ${msg.guild.name}\nPour la raison ${raison}`)
        msg.channel.send(`${mute.user.username} a bien été mute !`)
      })

      let embed = new MessageEmbed()
      .setColor('BLACK')
      .setTitle(`Modération: Mute.`)
      .addField('`Mute`', mute.user.username)
      .addField('`Modérateur:`', msg.author.username)
      .addField('`Raison:`', raison)
      .addField('`Date:`', msg.createdAt)

      let channel = msg.guild.channels.cache.find(ch=>ch.name==="yuu")
      if(!channel)return;
      channel.send(embed)
    }}