const { Client, Collection } = require("discord.js");
const fs = require("fs");
const { prefix, token } = require('./config')
const client = new Client();
const Canvas = require("canvas")

client.snipes = new Collection();
client.queue = new Map();
client.prefix = prefix;
client.commands = new Collection();
client.categories = fs.readdirSync("./commands/");

["command","server"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on('ready',()=>{ 
    require('./events/client/ready')(client)
})
client.on('message',async message=>{
    message.member 
    message.author 
    require('./events/guild/message')(client,message)
})
client.on('messageUpdate',async(oldMessage,newMessage)=>{
    require('./events/guild/messageUpdate')(oldMessage,newMessage)
})
client.on('messageDelete',async(message)=>{
    require('./events/guild/messageDelete')(message)
})

client.on('guildMemberAdd', async member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'yuu');
        if (!channel) return;
   
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
   
        const background = await Canvas.loadImage(wallpaper);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   
        ctx.strokeStyle = '#070707';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
   
   
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#f10c0c';
        ctx.fillText('Bienvenue sur le serveur!,', canvas.width / 2.5, canvas.height / 3.5);
   
   
        ctx.font = (canvas, `${member.displayName}!`);
        ctx.fillStyle = '#f10c0c';
        ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
   
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
   
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 200, 200);
   
        const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
   
        channel.send(`> Bienvenue sur le serveur ! ${member}!`, attachment);
        
        member.roles.add("698595175580303381")
    });

client.on('message', async msg => {
    if(msg.content === '!join') {
        client.emit('guildMemberAdd', msg.member)
}})



client.login(token)