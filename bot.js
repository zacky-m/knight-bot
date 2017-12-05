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
    if (message.content.endsWith("?")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(5, message.content.length));
    }
});

client.login(process.env.BOT_TOKEN);
