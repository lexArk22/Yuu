const { MessageEmbed } = require("discord.js");
module.exports ={
    help: {
        name: "kick",
        description: "Kick a user from the guild!",
        usage: "!kick",
        category: 'moderation'
    },
    run: async (client, message, args) => {

        if(!message.member.hasPermission('KICK_MEMBERS'))
                message.channel.send("Tu n'as pas les permissions requises pour utiliser cette commande.");

        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member
              .kick('La raison sera posté dans les logs.')
              .then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`${user.tag} est bien kick.`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply("Je n'ai pas pu expulser cet utilisateur.");
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("L'utilisateur n'est plus dans le serveur.");
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply("Veuillez mentionner un utilisateur.")
        }

    let embed = new MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Kick:", user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.cache.find(c => c.name === "yuu")
        sChannel.send(embed)

}}