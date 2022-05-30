"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const utils_1 = require("../utils");
const dice = __importStar(require("../dice"));
const data = new builders_1.SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll some dice')
    .addIntegerOption(option => option
    .setName('node')
    .setDescription('Number Of DicE')
    .setRequired(true));
function execute(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        yield interaction.deferReply();
        const node = interaction.options.getInteger('node');
        const rollResult = dice.roll(node);
        const { computer, rolls, total } = rollResult;
        const shortcodes = rolls.map((element, index, array) => `${(index < array.length - 1) ? '' : 'computer'}dice${element}`);
        const emojiTags = shortcodes.map((shortcode) => (0, utils_1.getEmoji)(shortcode));
        const message = `\n${emojiTags.join(' ')}\n**Total:** ${total}${computer ? '\n*Please stand by for Computer intervention...*' : ''}`;
        yield interaction.editReply(message);
    });
}
;
exports.default = {
    data,
    execute
};
