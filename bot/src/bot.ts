import { Bot } from "grammy";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("6865897009:AAEvHptJL5wR80Lv8YZ4s9ee6Y12i8RygPE"); // <-- put your bot token between the ""



// Handle the /start command.
bot.command("start", (ctx) => {
    ctx.reply("Welcome! Up and running.")
});
// Handle other messages.
bot.on("message:text", (ctx) => ctx.reply("Got another message!"));

bot.on("message:file", (ctx) => {
    const file = ctx.message.document;
    ctx.reply("I got a file");
});

// Start the bot.
// bot.start();