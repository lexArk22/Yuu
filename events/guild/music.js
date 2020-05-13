const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js");

module.exports = {
  async play(song, message, client) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      const embed = new MessageEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setTitle(`Je me permets de partir du salon vocal.\nLa file d'attente musicale est maintenant finie.`)
      return queue.textChannel.send(embed).catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("CETTE VIDEO CONTIENT DU CONTENU DE DROIT D'AUTEUR.")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    
      const musicEmbed = new MessageEmbed()
      .setColor('BLACK')
      .setTitle(`Une musique vient de commencer:`)
      .setDescription(`[${song.title}]`)
      .setURL(`${song.url}`)
      .setTimestamp()
      queue.textChannel.send(musicEmbed).catch(console.error)
  }
}