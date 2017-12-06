var Discord = require("discord.js");
var client = new Discord.Client();

client.on('message', (message) => {

    //Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content.toUpperCase(); //Takes the message, and makes it all uppercase
    var prefix = '!Kn' //The text before commands, you can set this to whatever you want

    //Ping/Pong Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    }

    //Deleting Specific Messages
    if (message.channel.id === '387004194554642442') { //Checks if the message is in the specific channel
        if (message.content.includes('?')) { //Checks if the message is not a question, if it's not, the following code will run
            if (message.content.includes('@Meme King') && ('@Edge Lords')) {
                message.channel.send('Thank you for your question! You should receive an answer soon.')
            }
            else {
                message.delete()
                message.author.send('Please put either @Meme King or @Edge Lords in your message!')
            }
        }
        else if ((message.member.roles.some(r => ['Meme King', 'Edge Lords', 'Knight Boi'].includes(r.name)))) {
            console.log("Lol nice meme"); //Literally just bullshit console logging cause..I need this else if statement.
        }
        else {
            message.delete()
            message.author.send('Please put a question mark in your message!')
        }
    }
});

client.on('ready', () => {
    console.log("I am ready!");
});


client.login(process.env.BOT_TOKEN);
