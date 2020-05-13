const { MessageEmbed } = require('discord.js');

module.exports = {
    help: {
    name: "loop",
    description: "Répéter une liste d'attente.",
    category: 'music',
    },
    run: (client, message, args) => {
      
      const { channel } = message.member.voice;
      if (!channel) {
        //IF AUTHOR IS NOT IN VOICE CHANNEL
        return message.channel.send("Tu n'es pas dans un salon vocal.");
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);
  
      if (!serverQueue) {
        return message.channel.send("Il n'y a rien que je puisse répéter.");
      }
      
      //OOOOF
      serverQueue.loop = !serverQueue.loop
      
      
      const loopEmbed = new MessageEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setTitle(`La boucle est maintenant: **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
      message.channel.send(loopEmbed)
      
      
      
      
    }
  }