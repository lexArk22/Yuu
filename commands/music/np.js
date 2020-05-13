const { MessageEmbed } = require("discord.js");
module.exports = {
    help: {
    name: "np",
    description: "Donne le nom de la musique en cours.",
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
        return message.channel.send("Le client ne joue pas de musique.");
      }
      
      const npEmbed = new MessageEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setTitle("Titre de la chanson en cours:")
      .setDescription(serverQueue.songs[0].title)
      message.channel.send(npEmbed)
    }
  }