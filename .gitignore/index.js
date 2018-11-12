const Discord = require('discord.js');
const bot = new Discord.Client();

var PREFIX = ("*")

bot.on('ready', () => {
    bot.user.setGame("Commande *help");
    console.log("Connecté");
})

function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ':x: ' + description
    }});
}



bot.login("process.env.TOKEN")

bot.on('message', message => {
    if(message.content === PREFIX + 'help'){
        var embed = new Discord.RichEmbed()
            .setColor('#1015AE')
            .setTitle('Voici les rôles disponibles :')
            .addField("-builder", "Tu auras le rôle Builder pour recevoir des notifications pour mini-jeux...")
            .addField("-fortnite", "Tu pourras recevoir les notifications pour Fortnite")
            .addField("-csgo", "Tu pourras recevoir les notifications de csgo")
            .addField("-esport", "Tu pourras recevoir les notifications de l'esport ")
            .addField("-zobeqr", "Tu pourras recevoir les notifications des vidéos de Zobeqr...")
            .addField("-nyteez", "Tu pourras recevoir les notifications des vidéos de Nyteez...")
            .addField("-nyzow", "Tu pourras recevoir les notifications des vidéos de Nyzow...")
            .addField("-a2n", "Tu pourras recevoir les notifications des vidéos de A2N...")
            .addField("-blacky", "Tu pourras recevoir les notifications des vidéos de Blacky...")
            .addField("-code", "Tu pourras recevoir les notifications des vidéos de Code...")
            .addField("-nawly", "Tu pourras recevoir les notifications des vidéos de Nawly...")
            .addField("-zeelest", "Tu pourras recevoir les notifications des vidéos de Zeelest...")
            .addField("-maxa", "Tu pourras recevoir les notifications des vidéos de Maxa...")
            .addField("-tewher", "Tu pourras recevoir les notifications des vidéos de Tewher...")
            .addField("-sturr", "Tu pourras recevoir les notifications des vidéos de Sturr...")
        message.channel.sendEmbed(embed);
    
    }
    if(message.content[0] === PREFIX) {
        if(message.content === PREFIX + 'builder') {
            let role = message.guild.roles.find('name', 'BUILDER')

            if(message.member.roles.find('name', 'BUILDER')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle BUILDER ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle BUILDER ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'fortnite') {
            let role = message.guild.roles.find('name', 'FORTNITE')

            if(message.member.roles.find('name', 'FORTNITE')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle FORTNITE ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle FORTNITE ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'csgo') {
            let role = message.guild.roles.find('name', 'CSGO')

            if(message.member.roles.find('name', 'CSGO')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle CSGO ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle CSGO ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'esport') {
            let role = message.guild.roles.find('name', 'ESPORT')

            if(message.member.roles.find('name', 'ESPORT')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle ESPORT ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle ESPORT ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'zobeqr') {
            let role = message.guild.roles.find('name', 'Zobeqr')

            if(message.member.roles.find('name', 'Zobeqr')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Zobeqr ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Zobeqr ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'nyteez') {
            let role = message.guild.roles.find('name', 'Nyteez')

            if(message.member.roles.find('name', 'Nyteez')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Nyteez ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Nyteez ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'nyzow') {
            let role = message.guild.roles.find('name', 'Nyzow')

            if(message.member.roles.find('name', 'Nyzow')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Nyzow ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Nyzow ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'a2n') {
            let role = message.guild.roles.find('name', 'A2N')

            if(message.member.roles.find('name', 'A2N')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle A2N ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle A2N ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'blacky') {
            let role = message.guild.roles.find('name', 'Blacky')

            if(message.member.roles.find('name', 'Blacky')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Blacky ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Blacky ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'code') {
            let role = message.guild.roles.find('name', 'Code')

            if(message.member.roles.find('name', 'Code')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Code ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Code ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'nawly') {
            let role = message.guild.roles.find('name', 'Nawly')

            if(message.member.roles.find('name', 'Nawly')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Nawly ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Nawly ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'zeelest') {
            let role = message.guild.roles.find('name', 'Zeelest')

            if(message.member.roles.find('name', 'Zeelest')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Zeelest ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Zeelest ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'maxa') {
            let role = message.guild.roles.find('name', 'Maxa')

            if(message.member.roles.find('name', 'Maxa')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Maxa ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Maxa ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'tewher') {
            let role = message.guild.roles.find('name', 'Tewher')

            if(message.member.roles.find('name', 'Tewher')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Tewher ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Tewher ! :white_check_mark: `)
            }
        }
        if(message.content === PREFIX + 'sturr') {
            let role = message.guild.roles.find('name', 'Sturr')

            if(message.member.roles.find('name', 'Sturr')) {
                message.member.removeRole(role)
                message.reply(`Vous n'avez plus le rôle Sturr ! :x:`)
            }
            else {
                message.member.addRole(role)
                message.reply(`Vous avez obtenu le rôle Sturr ! :white_check_mark: `)
            }
        }
    }
})
