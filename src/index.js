// eris lib start
const Eris = require("eris");
require("dotenv").config();
const client = new Eris.CommandClient(process.env.TOKEN, {intents: 32767});

client.on("ready", async () => {
  console.log("BOT is Ready!");

  const commands = await client.getCommands();
  let guildId = '872361481763692564';

  (() => {

    if(!commands.legth) {
      client.createGuildCommand(guildId, {
        name: "cat",
        description: "send random cat images",
        type: 1
      })
      .catch(console.error);
    }
    
  })();
});

client.on("interactionCreate", async interaction => {
  if (!(interaction instanceof Eris.CommandInteraction)) return;

  if (interaction.data.name === "cat") {
    return interaction.createMessage("cat");
  }
});

client.connect();
// eris lib end
