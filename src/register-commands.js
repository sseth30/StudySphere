require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, ActivityType } = require('discord.js');

const commands = [
  {
    name: 'add',
    description: 'Adds two numbers.',
    options: [
      {
        name: 'first-number',
        description: 'The first number.',
        type: 4,
        required: true,
      },
      {
        name: 'second-number',
        description: 'The second number.',
        type: 4,
        required: true,
      },
    ],
  },
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();