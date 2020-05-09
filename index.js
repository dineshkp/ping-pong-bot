require('dotenv').config();
const { prefix } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	// do not proceed if the message does not begin with the prefix.
	if (!message.content.startsWith(prefix)) return;

	const command = message.content.split(' ')[0];

	switch (command) {
	case `${prefix}ping`:
		replyPong(message);
		break;
	case `${prefix}beep`:
		replyBoop(message);
		break;
	default:
		return message.channel.send('I don\'t know how to help you there');
	}
});

const replyPong = (message) => {
	message.channel.send('Pong');
};

const replyBoop = (message) => {
	message.channel.send('Boop');
};

client.login(process.env.DISCORD_TOKEN).then(() => {
	console.log(`Logged in as ${client.user.tag}!`);
}, err => {
	console.error('Something has gone wrong during login');
	console.error(err);
});
