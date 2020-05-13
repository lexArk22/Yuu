const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
        name: 'unban',
        category: 'moderation'
    },
    run: async (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("Tu n'as pas les permissions.")

        let member = client.users.cache.get(args[0]) || client.users.cache.fetch(args[0]).catch(()=> null)

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Je n'ai pas les permissions.")

        message.guild.members.unban(member.id);
            return message.channel.send(`**${member.tag}** est bien deban`)




}

    }