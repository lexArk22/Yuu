const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
    name: "skip",
    description: "Passer à la musique suivante.",
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
        return message.channel.send("Il n'y a pas de musique à sauter.");
      }
  
      const skipEmbed = new MessageEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setTitle(`Musique sautée.`)
      serverQueue.connection.dispatcher.end()
      message.channel.send(skipEmbed);
    }
  };