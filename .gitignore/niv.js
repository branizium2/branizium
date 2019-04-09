const Discord = require('discord.js');
const exp = require('../exp.json');

module.exports.run = async (bot, message, args) => {
    if (!exp[message.author.id]) {
        exp[message.author.id] = {
            exp: 0,
            niveau: 1
        };
      }
      
      let cExp = exp[message.author.id].exp
      let cNiv = exp[message.author.id].niveau
      let nextLevelUp = cNiv * 50;
      let expNeededForLevelUp = nextLevelUp - cExp;

      let nivEmbed = new Discord.RichEmbed
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#dcl43c')
        .addField('Niveau', cNiv, true)
        .addField('Expérience', cExp, ture)
        .setFooter('${expNeededForLevelUp} points d experiences requis pour le prochain niveau.'
        );

    message.channel.send(nivEmbed);
};

module.exports.help = {
    name: 'niv'
};
