const Discord = require('discord.js-commando');

const lifeBot = new Discord.Client();

const token = 'NTM5Mzc2NDAxMzg0NjAzNjQ4.DzBc_A.AjOVEyXD7IDB-7vsTQJjuu8_oE0';

lifeBot.registry.registerGroup('lifegoals', 'Life');
lifeBot.registry.registerDefaults();
lifeBot.registry.registerCommandsIn(__dirname + '/commands');

lifeBot.login(token);
