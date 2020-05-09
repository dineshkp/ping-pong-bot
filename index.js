require('dotenv').config();
const { prefix } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	// do not proceed if the message does not begin with the prefix.
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();

	switch (command) {
	case 'ping':
		replyPong(message);
		break;
	case 'beep':
		replyBoop(message);
		break;
	case 'server':
		replyServerName(message);
		break;
	default:
		return message.channel.send('I don\'t know how to help you there');
	}
});

const replyPong = (message) => {
	message.channel.send('pong');
};

const replyBoop = (message) => {
	message.channel.send('boop');
};

const replyServerName = message => {
	message.channel.send(`This server's name is: **${message.guild.name}**`);
};

client.login(process.env.DISCORD_TOKEN).then(() => {
	console.log(`Logged in as ${client.user.tag}!`);
}, err => {
	console.error('Something has gone wrong during login');
	console.error(err);
});
