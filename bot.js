const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = (token.token);
const prefix = (config.prefix);

client.login(token.token);

client.on('ready', () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setGame('Still in alpha!');
});

client.on('message', message => {
  // Preventing bot-ception
  if(msg.author.bot) return;
  if(!msg.content.startsWith(config.prefix)) return;
  // Defining arguments
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Commands will go here \/ \/
  
});
