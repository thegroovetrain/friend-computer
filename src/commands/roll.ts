import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { getEmoji } from "../utils";

import * as dice from "../dice";

export default {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Roll some dice')
        .addIntegerOption(option => option
            .setName('node')
            .setDescription('Number Of DicE')
            .setRequired(true)
        ),
    async execute(interaction:CommandInteraction): Promise<void> {
        await interaction.deferReply();
        const node = interaction.options.getInteger('node');
        const rollResult:dice.RollResult = dice.roll(node);
        const { computer, rolls, total } = rollResult;
        const shortcodes = rolls.map((element, index, array) => `${(index < array.length - 1) ? '' : 'computer'}dice${element}`);
        const emojiTags = shortcodes.map((shortcode) => getEmoji(shortcode));
        const message = `\n${emojiTags.join(' ')}\n**Total:** ${total}${computer ? '\n*Please stand by for Computer intervention...*' : ''}`;
        await interaction.editReply(message);
    }
}