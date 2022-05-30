"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.getByDiscordId = exports.getById = exports.get = void 0;
const knex_1 = __importDefault(require("knex"));
const knexfile = require('../../knexfile');
const db = (0, knex_1.default)(knexfile.development);
function get() {
    return db('player');
}
exports.get = get;
function getById(id) {
    return db('player').where('id', id);
}
exports.getById = getById;
function getByDiscordId(discordId) {
    return db('player').where('discord_id', discordId);
}
exports.getByDiscordId = getByDiscordId;
function register(discordId) {
    return __awaiter(this, void 0, void 0, function* () {
        return db('player').insert({
            discord_id: discordId,
            clone_id: null
        }, ['id', 'discord_id']);
    });
}
exports.register = register;
