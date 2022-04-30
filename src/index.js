const Eris = require("eris");
require("dotenv").config();
const client = new Eris.CommandClient(process.env.TOKEN, {intents: 32767}, {prefix: process.env.PREFIX});
const { readdirSync } = require('fs');

// command handling
const commandFile = readdirSync('./src/commands').filter(File => File.endsWith(".js"));

commandFile.forEach(file => {
  const command = require(`./commands/${file}`);
  client.registerCommand(command.name, async (message, args) => command.run(client, message, args), {
    aliases: command.alias,
    description: command.description
  });
});

// ready log
client.on("ready", async () => {
  console.log("BOT is Ready!");
});

// error handling
client.on("error", (err) => {
  if (err.code === 1006) return;
});

// for connect to  bot
client.connect();