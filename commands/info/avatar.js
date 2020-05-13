module.exports = {
    help: {
    name: 'avatar',
    description: "Sert à voir l'avatar.",
    category: 'info',
    },
    run: (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const avatar = {
                color: 'BLACK',
                author: {
                    name: 'Votre avatar',
                    icon_url: user.displayAvatarURL({ dynamic: true }) + '?size=2048',
                    url: user.displayAvatarURL({ dynamic: true }) + '?size=2048',
                },
                image: {
                    url: user.displayAvatarURL({ dynamic: true }) + '?size=2048',
                },
                footer: {
                    text: "Yuu Otasoka.",
                },
            };
    
            message.channel.send({ embed: avatar });
    }};