import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import * as Player from '../models/player';

const data = new SlashCommandBuilder()
    .setName('register')
    .setDescription('register as a player in Alpha Complex');

async function execute(interaction:CommandInteraction): Promise<void> {
    await interaction.deferReply({ephemeral: true});
    const userId = interaction.user.id;
    const data = Player.register(userId).then(player => {
        interaction.editReply(`Successfully registered player #${player[0].id}`);
    }).catch(error => {
        interaction.editReply(`Something went wrong!: ${error}`);
    });
}

export default {
    data,
    execute
}