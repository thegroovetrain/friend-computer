import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { DiscordRoleID } from '../constants';

const data = new SlashCommandBuilder()
    .setName('console-equipment')
    .setDescription('AC:/Equipment/> _')
    .addSubcommand(subcommand => subcommand
        .setName('create')
        .setDescription('Add a piece of equipment to the database')
        .addStringOption(option => option
            .setName('name')
            .setDescription('Name')
            .setRequired(true)  
        )
        .addStringOption(option => option
            .setName('action-order-stat')
            .setDescription('Statistic for calculating Action Order')
            .addChoices(
                { name: 'violence', value: 'violence' },
                { name: 'brains', value: 'brains' },
                { name: 'chutzpah', value: 'chutzpah' },
                { name: 'mechanics', value: 'mechanics' },
            )
            .setRequired(true)
        )
        .addIntegerOption(option => option
            .setName('action-order')
            .setDescription('Action Order')
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('weight')
            .setDescription('Weight')
            .addChoices(
                { name: 'small', value: 'small' },
                { name: 'medium', value: 'medium' },
                { name: 'large', value: 'large' },
                { name: 'oversize', value: 'oversize' },
            )
            .setRequired(true)
        )
        .addIntegerOption(option => option
            .setName('level')
            .setDescription('Level')
            .addChoices(
                { name: 'alpha', value: 0 },
                { name: 'level-1', value: 1 },
                { name: 'level-2', value: 2 },
                { name: 'level-3', value: 3 },
                { name: 'level-4', value: 4 },
                { name: 'level-5', value: 5 },
            )
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('description')
            .setDescription('Description')
            .setRequired(true)
        )
    )

export default {
    data,
    async execute(interaction:CommandInteraction): Promise<void> {
        
    }
}