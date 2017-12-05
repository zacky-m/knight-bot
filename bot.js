const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("I am ready!");
});

client.on('message', (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.on('guildMemberAdd', member =>) {
    console.log('User' + member.user.username + 'has joined the server!')

    var role = member.guild.roles.find('name', 'Meme Peasants');
    member.addRole(role)
}

bot.on('disconnect', function (msg, code) {
    if (code === 0) return console.error(msg);
    bot.connect();
});

client.login(process.env.BOT_TOKEN);
