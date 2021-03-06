var Discord = require("discord.js");
var client = new Discord.Client();

client.on('message', (message) => {

    //Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content.toUpperCase(); //Takes the message, and makes it all uppercase
    var prefix = '!Kn' //The text before commands, you can set this to whatever you want
    var jRole = message.guild.roles.get('387002210233614336')
    var kRole = message.guild.roles.get('386959013809487873')
    var eRole = message.guild.roles.get('386960113539481610')
    var botRole = message.guild.roles.get('387808932900503565')
    var memeID = client.channels.get('386956245984215052')
    var level = 1;

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor(0x00AE86)
        .addField('Your Level:', level, true)


    //Ping/Pong Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    }

    if (message.channel.type === 'dm') return;

    //Deleting Specific Messages In the AMA channel
    if (message.channel.id === '387004194554642442') { //Checks if the message is in the specific channel
        if (message.content.includes('?') && (message.isMentioned('386959013809487873'))) { //Checks if the message has a question mark and an @Meme King
            message.channel.send('Thank you for your question! You should receive an answer soon.'); //Sends a thank you message for the question.
        }
        else if (message.content.includes('?') && (message.isMentioned('386960113539481610'))) { //Checks if the message has a question mark and an @Edge Lords
            message.channel.send('Thank you for your question! You should receive an answer soon.');
        }
        else if ((message.member.roles.some(r => ['Meme King', 'Edge Lords', 'Knight Boi'].includes(r.name)))) {
            console.log("Lol nice meme"); //Literally just bullshit console logging cause..I need this else if statement.
        }
        else if (!message.content.includes('?') && (message.isMentioned('386959013809487873'))) { //Checks if the message has @Meme King but not question mark
            message.delete()
            message.author.send('Please put a question mark in your message!')
        }
        else if (!message.content.includes('?') && (message.isMentioned('386960113539481610'))) { //Checks if the message has @Edge Lords but not question mark
            message.delete()
            message.author.send('Please put a question mark in your message!')
        }
        else if (!message.content.includes('?') && (!message.isMentioned('386959013809487873') || !message.isMentioned('386960113539481610'))) { //Checks if the message has no conditions met
            message.delete()
            message.author.send('Please put @Meme King or @Edge Lords as well as a question mark in your message!')
        }
        else if (message.content.includes('?') && (!message.isMentioned('386959013809487873') || !message.isMentioned('386960113539481610'))) { //Checks if the message has a question mark but no @Meme King or @Edge Lords
            message.delete()
            message.author.send('Please put @Meme King or @Edge Lords in your message!')
        }
    }

    if (message.channel.id === '386956245984215052') { //Checks if the message is in the memes channel
        if (message.member.roles.has(eRole.id) && (!message.member.roles.has(jRole.id))) {
          message.delete()
          message.author.send('You do not have the jester role! Please post another meme to the meme approval chat to get it approved!')
        }
    }

    if (message.channel.id === '387075592929017867') { //Checks if the message is in the test channel
        if (message.content.includes(prefix + 'level')) { //Checks if the message has the prefix + the word level
            message.channel.send({ embed }); //Sends the embedded message
        }
    }

});

client.on('guildMemberAdd', member => { //Event for when a user joins the server
    var nRole = member.guild.roles.get('387029449574580234'); //Finding the "Meme Peasants" role
    var royalID = client.channels.get("386968915688947714"); //Finding the royal-meme-decree channel
    var nobleID = client.channels.get("387045242198818816"); //Finding the noble-meme-decree channel

    console.log('User' + member.user.username + 'has joined the server') //Sends a message to the console that someone has joined the server
    member.addRole(nRole) //Adds the "Meme Peasants" role to the new user

    member.guild.channels.get('386981942752706561').send(`**Welcome ${member.user}!** Please check out the ${royalID} for all the rules! `); //Gets the channel then sends the message

});

client.on('ready', () => {
    console.log("I am ready!");
});


client.login(process.env.BOT_TOKEN);
