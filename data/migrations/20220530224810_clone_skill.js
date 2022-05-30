/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clone_skill', table => {
        table.integer('clone_id')
            .references('id')
            .inTable('clone')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('skill_id')
            .references('id')
            .inTable('skill')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('rating')
            .notNullable()
            .defaultTo(0)
        table.primary(['clone_id', 'skill_id'], { constraintName: 'clone_skill_primary_key'})
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clone_skill')
};
