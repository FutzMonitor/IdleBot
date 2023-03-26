require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'arithmetic',
        description: 'Adds two numbers together.',
        options: [
            {
                name: 'operation',
                description: 'The operation to perform.',
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'Addition',
                        value: 'add',
                    },
                    {
                        name: 'Subtraction',
                        value: 'subtract',
                    },
                    {
                        name: 'Multiplication',
                        value: 'multiply',
                    },
                    {
                        name: 'Division',
                        value: 'divide',
                    }
                ],
                required: true,
            },
            {
                name: 'first_number',
                description: 'The first number to add.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second_number',
                description: 'The second number to add.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            }

        ]
    }
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('🔨 Registering / commands...')
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID),
            {body: commands}
        );

        console.log('✅ Successfully registered / commands.')
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }
})();