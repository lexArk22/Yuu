const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
    name: "pause",
    description: "pause the song",
    category: 'music',
    },
    run: (client, message, args) => {
    const { channel } = message.member.voice;
      if (!channel) {
        //IF AUTHOR IS NOT IN VOICE CHANNEL
        return message.channel.send("Tu n'es pas dans un salon vocal.:/");
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);
  
      if (!serverQueue) {
        return message.channel.send("Il n'y a pas de musique à mettre en pause.");
      }
      
      if(serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause(true)
        
        const pauseEmbed = new MessageEmbed()
        .setColor('BLACK')
        .setTimestamp()
        .setTitle(`✅ | La musique est bien en pause.`)
        return message.channel.send(pauseEmbed)
    }  
    }
  }