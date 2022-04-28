// eris lib start
const Eris = require("eris");
require("dotenv").config();
const client = new Eris(process.env.TOKEN, {intents: 32767});

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


// expressjs start
const express = require('express') // untuk website
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Invite ZenBot now! https://discord.com/api/oauth2/authorize?client_id=915495248749293598&permissions=8&scope=bot Temp bot need admin permission, but i keep it safe, i hope!')
})

app.listen(port, () => {
  console.log(`ExpressJS listening on port ${port}`)
})
// expressjs end 