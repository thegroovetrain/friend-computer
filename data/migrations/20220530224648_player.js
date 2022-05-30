/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('player', table => {
        table.increments();
        table.string('discord_id', 32)
            .unique()
            .notNullable();
        table.integer('clone_id')
            .unsigned()
            .references('id')
            .inTable('clone')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
            .unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('player')
};
