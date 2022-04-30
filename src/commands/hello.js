module.exports = {
    name: "hello",
    description: "hello world",
    alias: ["hello"],
    run: async (client, message, args) => {
        client.createMessage(message.channel.id, "hello world");
    }
};