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
    if (message.content.startsWith("?")) {
        message.delete(1000); //Supposed to delete message
    }
});

client.login(process.env.BOT_TOKEN);
