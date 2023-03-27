require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`✔ ${c.user.tag} is online!`)
});

client.on('messageCreate', (message) => { 
    if(message.author.bot) return;
    if(message.content == "hello"){
        message.reply("hello")
    }
    console.log(message.content)
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isCommand()) return;

    if(interaction.commandName == "arithmetic"){
        const numOne = interaction.options.getNumber('first_number');
        const numTwo = interaction.options.getNumber('second_number');
        if(interaction.options.getString('operation') == "add"){
            const sum = numOne + numTwo;
            interaction.reply(`The sum of ${numOne} and ${numTwo} is ${sum}.`)
        }
        else if(interaction.options.getString('operation') == "subtract"){
            const total = numOne - numTwo;
            interaction.reply(`When ${numTwo} is subtracted from ${numOne} you have ${total}.`)
        }
        else if(interaction.options.getString('operation') == "multiply"){
            const product = numOne * numTwo;
            interaction.reply(`The product of ${numOne} and ${numTwo} is ${product}.`)
        }
        else if(interaction.options.getString('operation') == "divide"){
            const quotient = numOne / numTwo;
            interaction.reply(`When ${numOne} is divided by ${numTwo} you have ${quotient}.`)
        }
    }
});

// Simply run 'nodemon' in the terminal to start the bot
client.login(process.env.TOKEN);