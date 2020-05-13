module.exports = {
    help: {
        name: 'say',
        description: '//',
        usage: 'R!say',
        accessible: 'Modération',
        category: 'moderation',
    },
     run: (client, msg, args) => {
        if (!msg.member.hasPermission('ADMINISTRATOR'))
    return msg.channel.send(
        "Vous n'avez pas les permissions pour faire cela !"
    );
    let messageToBot = args.join(' ');
    msg.delete().catch();
    msg.channel.send(messageToBot);
    }
};