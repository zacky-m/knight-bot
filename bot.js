var Discord = require("discord.js");
var client = new Discord.Client();

client.on('message', (message) => {

    //Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content.toUpperCase(); //Takes the message, and makes it all uppercase
    var prefix = '!Kn' //The text before commands, you can set this to whatever you want

    //Ping/Pong Command
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }

    //Deleting Specific Messages
    if (message.channel.id === 387004194554642442) { //Checks if the message is in the specific channel
        if (isNaN(message.content) { //Checks if the message is not a question, if it's not, the following code will run
            message.delete(); //This deletes the message
            message.channel.send(sender, 'Please put a question mark in your message!');
        }
    }
});

client.on('ready', () => {
    console.log("I am ready!");
});


client.login(process.env.BOT_TOKEN);
