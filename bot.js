const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.on('message', message => {
    let myRole = message.guild.roles.find("name", "Meme King");

    if ((!message.content("?")) &&(message.member.roles.has(myRole))) {
        message.delete(1000); //Supposed to delete message
    }
});

client.login(process.env.BOT_TOKEN);
