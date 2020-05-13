const { MessageAttachment } = require('discord.js');

module.exports = {
    help: {
        name: 'avatar2',
        category: 'info',
    },
    run: async(client, msg, args) => {

        const user = msg.mentions.users.first() || msg.author;

        const avatar = await user.displayAvatarURL({ dynamic: true }) + '?size=2048';

        const attachment = new MessageAttachment(avatar)

        msg.channel.send(`> Voici ton avatar ! ${msg.author.username}`, attachment)
    }
}