const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{
    try{
    let embed = new MessageEmbed()
    .setTitle(`Nouveau message modifié.`)
    .setColor(`BLACK`)
    .setDescription(`**L'utilisateur ${oldMessage.author.tag} a modifié son message dans le salon <#${oldMessage.channel.id}>**`)
    .addField(`Ancien message`,oldMessage.content,true)
    .addField(`Nouveau message`,newMessage.content,true)
    let channel = oldMessage.guild.channels.cache.find(ch=>ch.name==="yuu")
    if(!channel)return;
    channel.send(embed)
    }catch(e){}
}