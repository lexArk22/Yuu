const Discord = require("discord.js");
const { readdirSync } = require("fs")
const config = require('../../config')
const prefix = config.prefix

module.exports = {
    help: {
        name: 'help',
        description: 'Sert à voir toutes les commandes du client',
        usage: 'r!help',
        accessible: 'Membre',
        category: 'info',
    },
    run: (client, msg, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('380930')
            .setAuthor(`Yuu Otasoka,  AIDE:`, msg.guild.iconURL)
            .setThumbnail(client.user.avatarURL)

        if(!args[0]) {
             categories = readdirSync("./commands/")

            embed.setDescription(`Voici les commandes disponibles pour ${msg.guild.me.displayName}\nLe prefix de Yuu Otasoka est: **${prefix}**`)
            embed.setFooter(`© ${msg.guild.me.displayName} | Total de commandes: ${client.commands.size}`, client.user.avatarURL);

            categories.forEach(category => {
                const dir = client.commands.filter(c => c.help.category === category)
                const capitalise = category[0].toUpperCase() + category.substring(1)
                let commandes = dir.size > 0 ? `\n${dir.map(c => ` \`${c.help.name}\``)}` : `\n \`Il n'y a pas de commandes\``

                embed.addFields({name: '\u200B', value: `❯ ${capitalise} [${dir.size}]:${commandes}`})
            })

            return msg.channel.send(embed)
        } else {
            let command = client.commands.get(args[0].toLowerCase())
            if(!command) return msg.channel.send(embed.setTitle("Commande invalide.").setDescription(`Faites \`${prefix}help\` pour la liste des commandes.`))
            //command = command.config

            embed.setDescription(`Le prefix de Yuu Otasoka est: \`${prefix}\`\n
            **Commande:** ${command.help.name[0].toUpperCase() + command.help.name.substring(1)}
            **Description:** ${command.help.description || "Aucune description fournie."}
            **Usage:** ${command.help.usage ? `\`${command.help.usage}\`` : "Pas d'usage."}
            **Accessible à:** ${command.help.accessible || "Membres."}`)

            return msg.channel.send(embed)
        }
    }
}