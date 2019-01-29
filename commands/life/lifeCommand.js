const Discord = require('discord.js-commando');
const fetch = require('node-fetch');

class LifeCommand extends Discord.Command { 
    constructor(client) { 
        super(client, {
            name: 'lifeof',
            group: 'lifegoals',
            memberName: 'zindagi',
            description: 'Shows your life goals.'
        });
    }

    async run(message, args) {
        var life;
        fetch('https://lifebotapi.herokuapp.com/api/lifebot')
                    .then(res => res.json())
                    .then(data => {
                        life = data;
                        message.reply(`${args} has ${Math.floor(Math.random() * 1000)} ${life.po}\n${args} is ${life.adj}\n${args} ${life.ver}\n${args} ${life.lg}`);
                    });
        
        
        
        
        
    }
}

module.exports = LifeCommand;