const Discord = require("discord.js");

module.exports = {
    help: {
    name: "queue",
    description: "get list of added songs",
    category: 'music',
    },
    run: (client, message, args) => {
      const { channel } = message.member.voice;
      if (!channel) {
        //IF AUTHOR IS NOT IN VOICE CHANNEL
        return message.channel.send("Tu n'es pas dans un salon vocal. :/");
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);
  
      if (!serverQueue) {
        return message.channel.send("Il n'y a rien dans la file d'attente.");
      }

      const queueEmbed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setTitle("Voici la liste d'attente:")
      .setDescription(
         `${serverQueue.songs
              .map((song, index) => index + 1 + ". " + song.title)
                .join("\n\n")}`,
              { split: true }
      )
      .setAuthor(`${client.user.username}`)
  
      message.channel.send(queueEmbed);
    }
  };