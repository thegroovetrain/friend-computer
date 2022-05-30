import knex from 'knex';
const knexfile = require('../../knexfile');
const db = knex(knexfile.development);

export interface PlayerModel {
    id: number;
    discord_id: string;
    clone_id?: number | null;
    has_completed_tutorial?: boolean;
}

export function get() {
    return db<PlayerModel>('player');
}

export function getById(id: number) {
    return db<PlayerModel>('player').where('id', id);
}

export function getByDiscordId( discordId: number ) {
    return db<PlayerModel>('player').where('discord_id', discordId);
}

export async function register ( discordId: string ) {
    return db<PlayerModel>('player').insert({
        discord_id: discordId,
        clone_id: null
    }, ['id', 'discord_id']);
}