// eris lib start
const Eris = require("eris");
require("dotenv").config();
const bot = new Eris(process.env.TOKEN, {intents: 32767});

bot.on("ready", async () => {
  console.log("BOT is Ready!");

    //Note: You should use guild commands to test, as they update instantly. Global commands can take up to an hour to update.

    const commands = await bot.getCommands();

    if(!commands.length) {
        bot.createCommand({
            name: "test_chat_input",
            description: "Test command to show how to make commands",
            options: [ //An array of Chat Input options https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
                {
                    "name": "animal", //The name of the option
                    "description": "The type of animal",
                    "type": Constants.ApplicationCommandOptionTypes.STRING, //This is the type of string, see the types here https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
                    "required": true,
                    "choices": [ //The possible choices for the options
                        {
                            "name": "Dog",
                            "value": "animal_dog"
                        },
                        {
                            "name": "Cat",
                            "value": "animal_cat"
                        },
                        {
                            "name": "Penguin",
                            "value": "animal_penguin"
                        }
                    ]
                },
                {
                    "name": "only_smol",
                    "description": "Whether to show only baby animals",
                    "type": Constants.ApplicationCommandOptionTypes.BOOLEAN,
                    "required": false
                }
            ],
            type: Constants.ApplicationCommandTypes.CHAT_INPUT //Not required for Chat input type, but recommended
        }); //Create a chat input command

        bot.createCommand({
            name: "Test User Menu",
            type: Constants.ApplicationCommandTypes.USER
        }); //Create a user context menu

        bot.createCommand({
            name: "Test Message Menu",
            type: Constants.ApplicationCommandTypes.MESSAGE
        }); //Create a message context menu

        bot.createCommand({
            name: "test_edit_command",
            description: "Test command to show off how to edit commands",
            type: Constants.ApplicationCommandTypes.CHAT_INPUT //Not required for Chat input type, but recommended
        }); //Create a chat input command

        bot.createCommand({
            name: "test_delete_command",
            description: "Test command to show off how to delete commands",
            type: Constants.ApplicationCommandTypes.CHAT_INPUT //Not required for Chat input type, but recommended
        }); //Create a chat input command

        //In practice, you should use bulkEditCommands if you need to create multiple commands
    }
});

bot.on("error", (err) => {
    console.error(err); // or your preferred logger
});

bot.on("interactionCreate", (interaction) => {
    if(interaction instanceof Eris.CommandInteraction) {
        switch(interaction.data.name) {
            case "test_edit_command":
                interaction.createMessage("interaction recieved");
                return bot.editCommand(interaction.data.id, {
                    name: "edited_test_command",
                    description: "Test command that was edited by running test_edit_command"
                });
            case "test_delete_command":
                interaction.createMessage("interaction recieved");
                return bot.deleteCommand(interaction.data.id);
            default: {
                return interaction.createMessage("interaction recieved");
            }
        }
    }
});

bot.connect();
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