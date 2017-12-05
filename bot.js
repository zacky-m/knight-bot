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

bot.on('guildMemberAdd', member =>) {
    console.log('User' + member.user.username + 'has joined the server!')

    var role = member.guild.roles.get('387029449574580234');
    member.addRole(role)
}

client.login(process.env.BOT_TOKEN);
