require('dotenv').config();
const { Client, IntentsBitField, ActivityType, Events } = require('discord.js');
//const { OpenAI } = require('openai');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');
const statuses = require('./statuses');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//ADDS TWO NUMBERS VIA TWO REQUIRED OPTIONS USING /ADD
// client.on('interactionCreate', (interaction) => {
  // if (!interaction.isChatInputCommand()) return;
// 
  // if (interaction.commandName === 'add') {
    // const num1 = interaction.options.get('first-number').value;
    // const num2 = interaction.options.get('second-number').value;
// 
    // interaction.reply(`The sum is ${num1 + num2}`);
  // }
// });

// const IGNORE_PREFIX = "!";
// const CHANNELS = ['1214389219615834113'];
// 
// const openai = new OpenAI ({
  // apiKey: process.env.OPENAI_KEY,
// });

// client.on('messageCreate', async (message) => {
  // if (message.author.bot) return;
  // if (message.content.startsWith(IGNORE_PREFIX)) return;
  // if (!CHANNELS.includes(message.channelId) && !message.mentions.users.has(client.user.id))
      // return;
  //  
// 
  // const response = await openai.chat.completions.create({
      // model: 'gpt-3.5-turbo',
      // messages: [
        // {
        //name: 
        // role: 'system',
        // content: 'Chat GPT is a friendly chatbot.'
        // },
        // {
        //name:
        // role: 'user',
        // content: message.content,
        // },
      // ],
    // })
  // .catch((error) => console.error('OpenAI Error: \n', error));
// 
  // message.reply(response.choices[0].message.content);
// });

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB.');

    eventHandler(client);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();

client.login(process.env.TOKEN);
