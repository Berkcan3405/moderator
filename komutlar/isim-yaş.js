const discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('CHANGE_NICKNAME')) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> bu işlem için \`Kullanıcı Adı Değiştir\` olman gerekli!`));

    var user = message.mentions.users.first() ? message.guild.member(message.mentions.users.first()) : null;
    if (!user) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> bir kullanıcı etiketlemen gerekli!`));

    if ((args||[]).length < 2) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> isim ve yaş yazman gerekli!`));

    args = args.splice(1);
    var yas = args[args.length - 1];
    var ad = args.filter((e, i) => i != args.length - 1).join(' ');

    user.setNickname(`✵ V | İsim Yaş ❓`);
    message.channel.send(new discord.MessageEmbed().setColor("GREEN").setDescription(`<@${user.id}> Kullanıcısının ismi \`✵ V | İsim Yaş ❓\` olarak ayarlandı.`));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim'],
    permLevel: 0
};

exports.help = {
    name: 'isim',
    description: 'etiketlediğin kullanıcının ismini düzenler.'
};


// CodAre ❤ @ardaiisteaq#0301 \\

// NOT: Denendi ve hiçbir hata bulunmadı fakat bir hatanız olursa bana discord üzerinden ulaşabilirsiniz :)