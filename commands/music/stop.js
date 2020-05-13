const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
        name: "stop",
        description: "Arrêter la musique.",
        category: 'music',
    },
    run: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Tu n'es pas dans un salon vocal:/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Il n'y a rien à jouer que je puisse arrêter.");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    const stopEmbed = new MessageEmbed()
    .setColor('BLACK')
    .setTitle(`La musique est bien stoppée.`)
    serverQueue.textChannel.send(stopEmbed);
  }
};