"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randInt_1 = __importDefault(require("./randInt"));
const randomCapitalLetterCharacterCode = () => (0, randInt_1.default)(65, 91);
const randomSector = () => String.fromCharCode(randomCapitalLetterCharacterCode(), randomCapitalLetterCharacterCode(), randomCapitalLetterCharacterCode());
exports.default = randomSector;
