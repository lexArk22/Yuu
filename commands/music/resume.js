const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
    name: "resume", 
    description: "Reprendre la musique.",
    category: 'music',
    },
    run: (client, message, args) => {
        const { channel } = message.member.voice;
      if (!channel) {
        //IF AUTHOR IS NOT IN VOICE CHANNEL
        return message.channel.send("Tu n'es pas dans un salon vocal. :/");
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);
   if(serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume()

        const resumeEmbed = new MessageEmbed()
        .setColor('BLACK')
        .setTimestamp()
        .setTitle(`✅ | La musique a bien été reprise.`)
    
      return message.channel.send(resumeEmbed) 
   }
      const embed = new MessageEmbed
      .setCOlor('Black')
      .setTimestamp()
      .setTitle(`Il n'y a aucune musique à reprendre.`)
      message.channel.send(embed)
      
    }
  }