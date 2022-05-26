import fs from 'node:fs';
import path from 'node:path';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import * as dotenv from 'dotenv';

dotenv.config();

const commands:any = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

console.log(`Loading command files (${commandsPath})...`)

for (const file of commandFiles) {
    console.log(`- ${file}...`);
    const filePath = path.join(commandsPath, file);
    const command = require(filePath).default;
    commands.push(command?.data?.toJSON());
}

console.log(`Attempting to deploy application commands...`)

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);