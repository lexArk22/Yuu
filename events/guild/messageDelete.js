const {MessageEmbed} = require('discord.js')
module.exports=async(message)=>{
    try{
    if(message.author.bot) return;
    const snipes = message.client.snipes.get(message.channel.id) || [];
    snipes.unshift({
        content: message.content,
        author: message.author,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null,
        date: new Date().toLocaleString("en-GB", { dataStyle: "full", timeStyle: "short"})
    })
    snipes.splice(10);
    message.client.snipes.set(message.channel.id, snipes)
    let embed = new MessageEmbed()
    .setTitle(`Nouveau message supprimé.`)
    .setDescription(`**L'utilisateur ${message.author.tag} a supprimé son message dans le salon <#${message.channel.id}>**`)
    .addField(`Message`,message.content,true)
    .setColor(`BLACK`)
    let channel = message.guild.channels.cache.find(ch=>ch.name==="yuu")
    if(!channel)return;
    channel.send(embed)
    }catch(e){}
}