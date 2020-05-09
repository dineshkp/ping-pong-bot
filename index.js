require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	return message.content === 'ping' ? replyPong(message) : false;
});

const replyPong = (message) => {
	message.channel.send('Pong');
};

client.login(process.env.DISCORD_TOKEN).then(() => {
	console.log(`Logged in as ${client.user.tag}!`);
}, err => {
	console.error('Something has gone wrong during login');
	console.error(err);
});
