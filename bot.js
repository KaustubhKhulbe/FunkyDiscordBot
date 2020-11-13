console.log("beep beep");

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzc2NjQ0ODI4NTE0ODc3NDQw.X6343A.0IpmZBdc7RbvMr6FGw_4j9Etj7k');

client.on('ready', readyDiscord);

function readyDiscord(){
     console.log("I am ready");
}

const replies = [
     'Who summoned me?',
     'I know. You are inferior to me',
     'Why have I been awakened?',
     'Is this supposed to make me happy?'
]

client.on('message', gotMessage);

function gotMessage(msg){
     console.log(msg.content);
     if(msg.channel.id == '776652447946506250' && msg.content == 'King Funky'){
          const index = Math.floor(Math.random() * replies.length);
          msg.channel.send(replies[index]);
     }
}