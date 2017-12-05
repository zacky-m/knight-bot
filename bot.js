const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!Kn"
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {

    console.log('I am ready!');
});

client.on('message', message => {

    if (command === "ping") {
        message.channel.send("pong!"); 
    }
});

client.on("guildMemberAdd", (member) => {

    let role = message.guild.roles.get("387029449574580234");
    member.addRole(role).catch(console.error);

}

client.login(process.env.BOT_TOKEN);
