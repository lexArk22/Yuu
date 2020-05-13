const { MessageEmbed } = require("discord.js")

module.exports = {
    help: {
        name: 'ban',
        category: 'moderation',
    },
    run: async(client, message, args) => {
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Ban the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             * Read more about what ban options there are over at
             * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
             */
            member
              .ban({
                reason: 'They were bad!',
              })
              .then(() => {
                // We let the message author know we were able to ban the person
                message.reply(`${user.tag} est bien ban du serveur.`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to ban the member,
                // either due to missing permissions or role hierarchy
                message.reply("Je n'ai pas pu ban cet utilisateur.");
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("Cet utilisateur n'est plus dans le serveur!");
          }
        } else {
          // Otherwise, if no user was mentioned
          message.reply("Veuillez mentionner un utilisateur à ban!");
        }

        let embed = new MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Ban")
    .addField("Ban:", user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.cache.find(c => c.name === "yuu")
        sChannel.send(embed)
      }  
    }