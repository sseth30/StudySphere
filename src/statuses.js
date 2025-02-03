require('dotenv').config();
const { ActivityType } = require('discord.js');

//TOTAL: 20 STATUSES (4 ACTIVITIES * 5 NAMES)
var statuses = [
  //PLAYING
  { name: "with my phone 📱", type: ActivityType.Playing },
  { name: "negotiator with my alarm clock ⏰", type: ActivityType.Playing },
  { name: "musical chairs with study spots 🪑", type: ActivityType.Playing },
  { name: "DJ with my study playlists 🎧", type: ActivityType.Playing },
  { name: "chef with 2 AM microwave ramen 🍜", type: ActivityType.Playing },
  //WATCHING
  { name: "Khan Academy 🌱", type: ActivityType.Watching },
  { name: "The Organic Chemistry Tutor 🧪", type: ActivityType.Watching },
  { name: "paint dry on the wall 💤", type: ActivityType.Watching },
  { name: "the stars for a sign that I'll pass ✨", type: ActivityType.Watching },
  { name: "the Wi-Fi signal perform a vanishing act 🛜", type: ActivityType.Watching },
  //LISTENING
  { name: "the symphony of the mouse clicks 🖱️", type: ActivityType.Listening },
  { name: "the echo of unchecked notifications 🔔", type: ActivityType.Listening },
  { name: "my delusions 🔮", type: ActivityType.Listening },
  { name: "the clock ticking 🕒", type: ActivityType.Listening },
  { name: "the new album 🎶", type: ActivityType.Listening },
  //COMPETING
  { name: "the autocorrect spelling bee 📝", type: ActivityType.Competing },
  { name: "drinking the very last drop of study boba 🧋", type: ActivityType.Competing },
  { name: "the game of \"this darned word count\" 🖋", type: ActivityType.Competing },
  { name: "a world of unfair deadlines 🏁", type: ActivityType.Competing },
  { name: "the library for the quietest spot 🔇", type: ActivityType.Competing },
];

module.exports = statuses;
