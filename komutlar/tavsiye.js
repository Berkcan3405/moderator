const Discord = require('discord.js');

exports.run = function(client, message, args) {

    let sikayetkonu = args.slice(0).join(' ');
    if (sikayetkonu.length < 1) return message.channel.send('Kullanım: !tavsiye (tavsiyeniz)').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('\`Đ𝙰𝚁𝙺 Ⱡ𝙸𝙶𝙷𝚃 🎮  Tavsiyeniz iletildi.\`   <:gamers:1005162716530491492>')
message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**__YENİ BİR KULLANICI TAVSİYESİ__**   <:gamers:1005162716530491492>

-------------------------------------------------------------------------------------
<:gamers:1005162716530491492>   **Tavsiye:**  ${sikayetkonu}
-------------------------------------------------------------------------------------
<:gamers:1005162716530491492>   **Komut Kanalı:** ${message.channel}
-------------------------------------------------------------------------------------
<:gamers:1005162716530491492>   **Tavsiye Eden:** ${message.author} **-** \`${message.author.tag}\`
-------------------------------------------------------------------------------------`)
client.channels.cache.get('9961338189979725865').send(embed2).then(async msj => {msj.react('🟢').then(() => msj.react('🔴')); // Kanal ID 
})
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'tavsiye',
  description: 'Şikayet de bulunursunuz.',
  usage: 'sikayet <Şikayet>'
};