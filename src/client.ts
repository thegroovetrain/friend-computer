import fs from 'node:fs';
import path from 'node:path';
import { Client, Collection, CommandInteraction, Intents } from 'discord.js';

export type Command = {
    data: any;
    execute: (interaction:CommandInteraction) => void;
}

export interface MyClient extends Client {
    commands?: Collection<string, Command>;
}

function client() {

    const client:MyClient = new Client({
        "intents": [ Intents.FLAGS.GUILDS ]
    });

    // load command handlers

    client.commands = new Collection();
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath).default;
        client.commands.set(command.data.name, command);
    }

    // register command handlers

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const command = client.commands?.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });

    // load events

    const eventsPath = path.join(__dirname, 'events');
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath).default;
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }

    return client;

}

export default client;