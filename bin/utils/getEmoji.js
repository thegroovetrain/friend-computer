"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMOJI_SHORTCODE_TABLE = void 0;
exports.EMOJI_SHORTCODE_TABLE = {
    'dice1': "<:dice1:979161087704440932>",
    'dice2': "<:dice2:979161087322775553>",
    'dice3': "<:dice3:979161087368904726>",
    'dice4': "<:dice4:979161087717040148>",
    'dice5': "<:dice5:979161087419240489>",
    'dice6': "<:dice6:979161087679295539>",
    'computerdice1': "<:computerdice1:979160951163080715>",
    'computerdice2': "<:computerdice2:979160968229711952>",
    'computerdice3': "<:computerdice3:979160982788141126>",
    'computerdice4': "<:computerdice4:979161001645735937>",
    'computerdice5': "<:computerdice5:979161018699751424>",
    'computerdice0': "<:computerdice0:979161041973960735>",
};
function getEmoji(shortcode) {
    return exports.EMOJI_SHORTCODE_TABLE[shortcode];
}
exports.default = getEmoji;
